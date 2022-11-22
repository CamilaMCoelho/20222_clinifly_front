import styled, { css } from 'styled-components'
import ReactSelect from 'react-select'
import AsyncSelect from 'react-select/async'

import { ErrorMessage as ErrorMessageBase } from '../Input/styles'

export const SelectContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  label {
    font-size: 1rem;
    font-weight: 700;

    &::after {
      content: '*';
      color: ${({ theme }) => theme.colors['error-red']};
    }
  }
`

interface StyledSelectProps {
  isInvalid: boolean
}

const ReactSelectBase = css<StyledSelectProps>`
  .Select__control {
    padding: 0.25rem;
    font-size: ${({ theme }) => theme.fontSizes['text-regular-m']};
    background: ${({ theme }) => theme.colors['white-300']};
    border: 0;
    box-shadow: none;

    ${({ isInvalid, theme }) =>
      isInvalid &&
      css`
        border: 1px solid ${theme.colors['error-red']};

        &:hover {
          border: 1px solid ${theme.colors['error-red']};
        }
      `}

    position: relative;
    min-height: 40px;
  }

  .Select__control--is-disabled {
    pointer-events: initial;
    cursor: not-allowed;
  }

  .Select__control--is-focused {
    ${({ isInvalid, theme }) =>
      isInvalid &&
      css`
        border: 1px solid ${theme.colors['error-red']};
      `}
    box-shadow: none;
  }

  .Select__option {
    color: ${({ theme }) => theme.colors['brand-purple']};
    font-size: ${({ theme }) => theme.fontSizes['text-regular-m']};
  }

  .Select__option--is-selected {
    color: ${({ theme }) => theme.colors['brand-purple']};
    background: ${({ theme }) => theme.colors['brand-purple-light']};
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__indicator {
    position: absolute;
    right: 0;
  }

  .Select__input-container {
    grid-template-columns: 0 auto;
  }

  .Select__single-value {
    font-family: ${({ theme }) => theme.fonts.regular};
  }

  .Select__value-container {
  }

  .Select__loading-indicator {
    display: none;
  }
`

export const ErrorMessage = styled(ErrorMessageBase)``

export const StyledReactSelect = styled(ReactSelect)`
  ${ReactSelectBase}
`

export const StyledDynamicSelect = styled(AsyncSelect)`
  ${ReactSelectBase}
`
