import styled from 'styled-components'

export const OurAppointmentsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`

export const AppointmentList = styled.div`
  width: 100%;

  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      font-weight: 700;

      border-bottom: 1px solid #000;
      line-height: 1.4;
    }

    tr {
      height: 60px;
    }

    td {
      border-top: 1px solid #d9d9d9;
      border-bottom: 1px solid #d9d9d9;

      font-size: ${({ theme }) => theme.fontSizes['text-regular-m']};
      text-align: center;

      &:last-child {
        vertical-align: middle;

        div {
          display: flex;
          justify-content: center;
          gap: 0.25rem;

          &:has(:only-child) {
            max-width: calc((90px * 2) + 41px + 8px);
            margin: 0 auto;
            justify-content: center;
          }
        }
      }
    }
  }

  > p {
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > a {
      width: 100%;
      max-width: 124px;
    }
  }
`

export const CreateNewAppointment = styled.button`
  width: 100%;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-weight: 700;

  padding: 0.625rem 1rem;
  border-radius: 4px;

  background: transparent;

  border: 2px solid ${({ theme }) => theme.colors['button-blue-500']};
  color: ${({ theme }) => theme.colors['button-blue-500']};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors['button-blue-600']};
    color: ${({ theme }) => theme.colors['button-blue-600']};
  }
`

export const TitleWithButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  > a {
    width: 100%;
    max-width: 224px;
  }
`
