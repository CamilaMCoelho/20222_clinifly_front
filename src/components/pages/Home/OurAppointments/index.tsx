import Link from 'next/link'
import { TitleText } from '../../../Typography'
// import { CoffeeCard } from '../CoffeeCard'
import { AppointmentList, OurAppointmentsContainer } from './styles'

// import { coffees } from '../../../../data/coffees'

interface AppointmentProps {
  id: string
  patientId: string
  doctorId: string
  address: string
  appointmentPrice: string
  createdAt: string
}

interface OurAppointmentsProps {
  appointments: AppointmentProps[]
}

export function OurAppointments({ appointments }: OurAppointmentsProps) {
  return (
    <OurAppointmentsContainer className="alignCenterContainer">
      <TitleText size="l" color="subtitle">
        Suas consultas
      </TitleText>
      <AppointmentList>
        {appointments ? (
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Nome</td>
                <td>Nome do Médico</td>
                <td>Endereço</td>
                <td>Preço da consulta</td>
                <td>Consulta criada</td>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.patientId}</td>
                  <td>{appointment.doctorId}</td>
                  <td>{appointment.address}</td>
                  <td>{appointment.appointmentPrice}</td>
                  <td>{appointment.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>
            Sem consultas agendadas em seu nome no momento. Para criar uma
            consulta <Link href="/criar-consulta">Clique aqui</Link>
          </p>
        )}
      </AppointmentList>
    </OurAppointmentsContainer>
  )
}
