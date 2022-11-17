import styled, { css } from 'styled-components'
import { PatternFormat } from 'react-number-format'
import { ErrorMessage as ErrorMessageBase } from '../Input/styles'

interface StyledMaskInputContainerProps {
  $labelTextAlignCenter: boolean
}

export const StyledMaskInputContainer = styled.div<StyledMaskInputContainerProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > label {
    font-size: 1rem;
    font-weight: 700;

    &::after {
      content: '*';
      color: ${({ theme }) => theme.colors['error-red']};
    }

    ${({ $labelTextAlignCenter }) =>
      $labelTextAlignCenter &&
      css`
        text-align: center;
      `}
  }
`

interface StyledMaskInputProps {
  $isInvalid: boolean
  $textAlignCenter: boolean
}

export const StyledMaskInput = styled(PatternFormat)<StyledMaskInputProps>`
  width: 100%;
  padding: 0.75rem 0.875rem;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors['white-300']};

  ${({ $textAlignCenter }) =>
    $textAlignCenter &&
    css`
      text-align: center;
    `}

  border-radius: 4px;
  border: 0;

  ${({ $isInvalid, theme }) =>
    $isInvalid &&
    css`
      border: 1px solid ${theme.colors['error-red']};
    `}
`

export const ErrorMessage = styled(ErrorMessageBase)``
