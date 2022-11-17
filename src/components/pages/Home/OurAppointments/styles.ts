import styled from 'styled-components'

export const OurAppointmentsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`

export const AppointmentList = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      font-weight: 700;

      border-bottom: 2px solid #000;
      line-height: 1.4;
    }

    tr {
      height: 40px;
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
  }
`
