import { useRouter } from 'next/router'
import type { GetServerSideProps } from 'next'
import { ReactElement, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import jwt from 'jsonwebtoken'
import { parseCookies } from 'nookies'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { DynamicSelect, Option } from '../components/Select'
import DefaultLayout from '../components/Layouts/DefaultLayout'

import { api } from '../services/api'

import {
  AvailableTimesContainer,
  CreateAppointmentContainer,
  CreateAppointmentForm,
} from '../styles/pages/createAppointment'

const doctorType = z.object({
  value: z.string(),
  label: z.string(),
})

const createAppointmentValidationSchema = z.object({
  id: z.object(doctorType.shape),
})

interface CreateAppoinmentFormData {
  id: string
  clinicId: string
  name: string
  crm: number
  modality: string
  daysAvailable: string[]
  timeAvailable: string[]
  priceMedicalConsultation: string
  clinic: {
    id: string
    name: string
    address: string
  }
}

export default function CreateAppointment() {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CreateAppoinmentFormData>({
    resolver: zodResolver(createAppointmentValidationSchema),
  })
  const { patientName } = parseCookies()
  const [doctor, setDoctor] = useState<CreateAppoinmentFormData | null>(null)
  const [selectedTime, setSelectedTime] = useState<{
    activeId: number
    day: string
    time: string
  }>({} as { activeId: number; day: string; time: string })

  const cookies = parseCookies()
  const router = useRouter()

  const filterDoctors = (inputValue: string, options: Option[]) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()),
    )
  }

  async function onSubmit(data: CreateAppoinmentFormData) {
    const { sub } = jwt.verify(
      cookies.cliniflyToken,
      '829f0400c0b07711411bb78ff65bba1b',
    )

    try {
      const response = await api.post('eventos', {
        type: 'appointmentCreated',
        data: {
          patientId: sub,
          doctorId: (data as unknown as { id: { value: string } }).id.value,
          clinicId: doctor?.clinicId,
          consultationDay: selectedTime.day,
          consultationHour: selectedTime.time,
          token: cookies.cliniflyToken,
        },
      })

      console.log(response)
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  async function getDoctors(inputValue: string) {
    try {
      const response: {
        data: CreateAppoinmentFormData[]
      } = await api.post('/eventos', { type: 'doctorList' })

      const options: Option[] = response.data.map(
        ({ id: value, name: label, ...rest }) => ({
          value,
          label,
          ...rest,
        }),
      )

      return filterDoctors(inputValue, options)
    } catch (error) {
      console.log(error)
      return []
    }
  }

  return (
    <CreateAppointmentContainer>
      <h1>Criar Consulta</h1>
      <div>
        <CreateAppointmentForm onSubmit={handleSubmit(onSubmit)}>
          <Input label="Nome do Paciente" value={patientName} readOnly />
          <Controller
            name="id"
            control={control}
            render={({ field: { onChange, ...field } }) => (
              <DynamicSelect
                label="Médico"
                placeholder="Selecione um médico"
                loadOptions={(inputValue) => getDoctors(inputValue)}
                onChange={(e) => {
                  setDoctor(e as CreateAppoinmentFormData)
                  onChange(e)
                }}
                error={errors.id}
                {...field}
              />
            )}
          />
          {doctor && (
            <>
              <Input
                label="CRM"
                value={doctor.crm}
                readOnly
                isRequired={false}
              />
              <Input
                label="Área de Atuação"
                value={doctor.modality}
                readOnly
                isRequired={false}
              />
              <Input
                label="Clínica"
                value={doctor.clinic.name}
                readOnly
                isRequired={false}
              />
              <Input
                label="Endereço da Clínica"
                value={doctor.clinic.address}
                readOnly
                isRequired={false}
              />
              <Input
                label="Preço da Consulta"
                value={doctor.priceMedicalConsultation}
                readOnly
                isRequired={false}
              />
              <span>Horários Disponíveis</span>
              <AvailableTimesContainer>
                {doctor.daysAvailable.map((days, i) => {
                  return (
                    <button
                      key={i}
                      type="button"
                      className={selectedTime.activeId === i ? 'active' : ''}
                      onClick={() =>
                        setSelectedTime({
                          activeId: i,
                          day: days,
                          time: doctor.timeAvailable[i],
                        })
                      }
                    >
                      <span>{`${days} ${doctor.timeAvailable[i]}`}</span>
                    </button>
                  )
                })}
              </AvailableTimesContainer>
            </>
          )}

          <Button isLoading={isSubmitting} disabled={isSubmitting}>
            Agendar
          </Button>
        </CreateAppointmentForm>
      </div>
    </CreateAppointmentContainer>
  )
}

CreateAppointment.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (!cookies.cliniflyToken) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  } else {
    try {
      const { sub } = jwt.verify(
        cookies.cliniflyToken,
        '829f0400c0b07711411bb78ff65bba1b',
      )

      return {
        props: { sub } || {},
      }
    } catch (error) {
      console.log(error)
      return {
        props: {},
      }
    }
  }
}
