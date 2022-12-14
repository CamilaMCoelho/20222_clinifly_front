import { GetServerSideProps } from 'next'
import { ReactElement } from 'react'
import { parseCookies } from 'nookies'
import jwt from 'jsonwebtoken'

import { Intro } from '../../components/pages/Home/Intro'
import { OurAppointments } from '../../components/pages/Home/OurAppointments'
import DefaultLayout from '../../components/Layouts/DefaultLayout'

import { HomeContainer } from '../../styles/pages/home'
import { api } from '../../services/api'

interface Patient {
  name: string
}

interface Doctor {
  id: string
  clinicId: string
  name: string
  crm: number
  modality: string
  daysAvailable: string[]
  timeAvailable: string[]
  priceMedicalConsultation: string
}
interface Clinic {
  name: string
  address: string
}

export interface AppointmentProps {
  id: string
  patientId: string
  doctorId: string
  clinicId: string
  consultationDay: string
  consultationHour: string
  createdAt: string
  patient: Patient
  doctor: Doctor
  clinic: Clinic
}

interface HomeProps {
  appointments: AppointmentProps[]
}

export default function Home({ appointments }: HomeProps) {
  return (
    <HomeContainer>
      <Intro />
      <OurAppointments appointments={appointments} />
    </HomeContainer>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
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

      const response = await api.post(`eventos?id=${sub}`, {
        type: 'appointmentGet',
      })

      return {
        props: { appointments: response.data },
      }
    } catch (error) {
      console.log(error)
      return {
        props: {},
      }
    }
  }
}
