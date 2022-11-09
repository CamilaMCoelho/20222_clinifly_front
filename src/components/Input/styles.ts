import styled, { css } from 'styled-components'

interface InputContainerProps {
  labelTextAlignCenter: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > label {
    font-size: 1rem;
    font-weight: 700;

    ${({ labelTextAlignCenter }) =>
      labelTextAlignCenter &&
      css`
        text-align: center;
      `}
  }
`

interface StyledInputProps {
  textAlignCenter: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.75rem 0.875rem;
  font-size: 0.875rem;

  ${({ textAlignCenter }) =>
    textAlignCenter &&
    css`
      text-align: center;
    `}

  border-radius: 4px;
  border: 0;
`
