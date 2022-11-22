import styled from 'styled-components'

export const CreateAppointmentContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;

  > h1 {
    text-align: center;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;
  }
`

export const CreateAppointmentForm = styled.form`
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > div input:read-only {
    cursor: default;

    color: ${({ theme }) => theme.colors['base-text']};
    background: ${({ theme }) => theme.colors['base-button']};
  }
`
