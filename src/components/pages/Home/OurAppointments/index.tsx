import Link from 'next/link'
import { Button } from '../../../Button'
import { TitleText } from '../../../Typography'
import {
  AppointmentList,
  CreateNewAppointment,
  OurAppointmentsContainer,
  TitleWithButtonContainer,
} from './styles'

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
      <TitleWithButtonContainer>
        <TitleText size="l" color="subtitle">
          Suas consultas
        </TitleText>
        {appointments && (
          <Link href="/criar-consulta">
            <Button>Nova Consulta</Button>
          </Link>
        )}
      </TitleWithButtonContainer>
      <AppointmentList>
        {appointments ? (
          <table>
            <thead>
              <tr>
                <th>Id da Consulta</th>
                <th>Id do Paciente</th>
                <th>Id do Médico</th>
                <th>Endereço</th>
                <th>Preço da Consulta</th>
                <th>Consulta Criada</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.id}</td>
                  <td>{appointment.patientId}</td>
                  <td>{appointment.doctorId}</td>
                  <td>{appointment.address}</td>
                  <td>{`R$ ${appointment.appointmentPrice
                    .replace('reais', '')
                    .trim()}`}</td>
                  <td>
                    {new Date(appointment.createdAt).toLocaleString('pt-BR')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>
            Sem consultas agendadas em seu nome no momento. Para criar uma
            consulta{' '}
            <Link href="/criar-consulta">
              <CreateNewAppointment>Clique aqui</CreateNewAppointment>
            </Link>
          </p>
        )}
      </AppointmentList>
    </OurAppointmentsContainer>
  )
}
