import styled, { css } from 'styled-components'

interface InputContainerProps {
  labelTextAlignCenter: boolean
  isRequired: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > label {
    font-size: 1rem;
    font-weight: 700;

    ${({ isRequired }) =>
      isRequired &&
      css`
        &::after {
          content: '*';
          color: ${({ theme }) => theme.colors['error-red']};
        }
      `}

    ${({ labelTextAlignCenter }) =>
      labelTextAlignCenter &&
      css`
        text-align: center;
      `}
  }
`

interface StyledInputProps {
  isInvalid: boolean
  textAlignCenter: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.75rem 0.875rem;
  font-size: 0.875rem;

  background: ${({ theme }) => theme.colors['white-300']};

  ${({ textAlignCenter }) =>
    textAlignCenter &&
    css`
      text-align: center;
    `}

  border-radius: 4px;
  border: 0;

  ${({ isInvalid, theme }) =>
    isInvalid &&
    css`
      border: 1px solid ${theme.colors['error-red']};
    `}
`

interface ErrorMessageProps {
  textAlignCenter: boolean
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  color: red;
  font-size: 0.75rem;

  ${({ textAlignCenter }) =>
    textAlignCenter &&
    css`
      text-align: center;
    `}
`
