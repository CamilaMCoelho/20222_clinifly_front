import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react'
import { InputContainer, StyledInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  textAlignCenter?: boolean
  labelTextAlignCenter?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    id,
    name,
    label,
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
        {...props}
      />
    </InputContainer>
  )
}

export const Input = forwardRef(InputBase)
