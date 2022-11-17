import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { FieldError } from 'react-hook-form'

import { ErrorMessage, InputContainer, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
  textAlignCenter?: boolean
  labelTextAlignCenter?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    id,
    name,
    label,
    error,
    textAlignCenter = false,
    labelTextAlignCenter = false,
    ...props
  },
  ref,
) => {
  return (
    <InputContainer labelTextAlignCenter={labelTextAlignCenter}>
      {!!label && <label htmlFor={name}>{label}</label>}
      <StyledInput
        id={name}
        ref={ref}
        name={name}
        textAlignCenter={textAlignCenter}
        isInvalid={!!error}
        {...props}
      />
      {!!error && (
        <ErrorMessage textAlignCenter={textAlignCenter}>
          {error.message}
        </ErrorMessage>
      )}
    </InputContainer>
  )
}

export const Input = forwardRef(InputBase)
