import type { ReactElement } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { DynamicSelect, Option } from '../components/Select'
import DefaultLayout from '../components/Layouts/DefaultLayout'

import { api } from '../services/api'

import {
  CreateAppointmentContainer,
  CreateAppointmentForm,
} from '../styles/pages/createAppointment'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/router'

const doctorType = z.object({
  value: z.string(),
  label: z.string(),
})

const createAppointmentValidationSchema = z.object({
  patientId: z.string().min(1, 'Informe seu id'),
  doctorId: z.object(doctorType.shape),
  address: z.string().min(1, 'Informe seu endereço'),
  appointmentPrice: z.string(),
})

export type CreateAppoinmentFormData = z.infer<
  typeof createAppointmentValidationSchema
>

export default function CreateAppointment() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CreateAppoinmentFormData>({
    resolver: zodResolver(createAppointmentValidationSchema),
  })

  const cookies = parseCookies()
  const router = useRouter()

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  const filterDoctors = (inputValue: string, options: Option[]) => {
    return options.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase()),
    )
  }

  async function onSubmit(data: CreateAppoinmentFormData) {
    const formattedPrice = data.appointmentPrice.replace('R$', '')

    console.log({
      patientId: data.patientId,
      address: data.address,
      doctorId: data.doctorId.value,
      appointmentPrice: `${formattedPrice} reais`.trim(),
      token: cookies.cliniflyToken,
    })

    try {
      const response = await api.post('eventos', {
        type: 'appointmentCreated',
        data: {
          patientId: data.patientId,
          address: data.address,
          doctorId: data.doctorId.value,
          appointmentPrice: `${formattedPrice} reais`.trim(),
          token: cookies.cliniflyToken,
        },
      })

      router.push('/home')

      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function getDoctors(inputValue: string) {
    try {
      const response: { data: { id: string; name: string }[] } = await api.post(
        '/eventos',
        { type: 'doctorList' },
      )

      console.log(response)

      const options: Option[] = response.data.map(
        ({ id: value, name: label }) => ({
          value,
          label,
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
          <Input
            {...register('patientId')}
            name="patientId"
            label="Nome do Paciente"
            error={errors.patientId}
          />
          <Controller
            name="doctorId"
            control={control}
            render={({ field }) => (
              <DynamicSelect
                label="Médico"
                placeholder="Selecione um médico"
                loadOptions={(inputValue) => getDoctors(inputValue)}
                error={errors.doctorId}
                {...field}
              />
            )}
          />

          <Input
            {...register('address')}
            name="address"
            label="Endereço"
            placeholder="Rua ABC, 56"
            error={errors.address}
          />
          <Input
            {...register('appointmentPrice')}
            label="Preço da Consulta"
            value={`R$ ${getRandomInt(50, 120)}`}
            readOnly
            error={errors.appointmentPrice}
          />
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
