import Link from 'next/link'

import { Button } from '../../../Button'
import { TitleText } from '../../../Typography'
import type { AppointmentProps } from '../../../../pages/home'

import {
  AppointmentList,
  CreateNewAppointment,
  OurAppointmentsContainer,
  TitleWithButtonContainer,
} from './styles'

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
                <th>Nome do Paciente</th>
                <th>Nome do Médico</th>
                <th>Dia</th>
                <th>Horário</th>
                <th>Clínica</th>
                <th>Endereço da Clínica</th>
                <th>Preço da Consulta</th>
                <th>Consulta Criada</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, i) => (
                <tr key={appointment.id}>
                  <td>{i + 1}</td>
                  <td>{appointment.patient.name}</td>
                  <td>{appointment.doctor.name}</td>
                  <td>{appointment.consultationDay}</td>
                  <td>{appointment.consultationHour}</td>
                  <td>{appointment.clinic.name}</td>
                  <td>{appointment.clinic.address}</td>
                  <td>{appointment.doctor.priceMedicalConsultation}</td>
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
