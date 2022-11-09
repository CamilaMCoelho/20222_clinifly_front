import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { InputContainer, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { id, name, label, ...props },
  ref,
) => {
  return (
    <InputContainer>
      {!!label && <label htmlFor={name}>{label}</label>}
      <StyledInput id={name} ref={ref} name={name} {...props} />
    </InputContainer>
  )
}

export const Input = forwardRef(InputBase)
