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

export const AvailableTimesContainer = styled.div`
  display: flex;
  gap: 1rem;

  > button {
    all: unset;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors['button-blue-500']};
    border-radius: 4px;
    text-align: center;
    color: ${({ theme }) => theme.colors['button-blue-500']};
    cursor: pointer;
    padding-block: 0.25rem;

    font-size: ${({ theme }) => theme.fontSizes['text-bold-m']};
    font-weight: 700;

    transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.2s;

    &.active {
      background: ${({ theme }) => theme.colors['button-blue-600']};
      border-color: ${({ theme }) => theme.colors['button-blue-600']};
      color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
      background: ${({ theme }) => theme.colors['button-blue-600']};
      border-color: ${({ theme }) => theme.colors['button-blue-600']};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`
