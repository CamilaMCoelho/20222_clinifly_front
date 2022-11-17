import { forwardRef } from 'react'
import type {
  ButtonHTMLAttributes,
  ForwardRefRenderFunction,
  ReactNode,
} from 'react'

import { Spin, SpinContainer, StyledButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { children, isLoading, ...props },
  ref,
) => {
  return (
    <StyledButton ref={ref} {...props}>
      {isLoading ? (
        <SpinContainer>
          <Spin />
        </SpinContainer>
      ) : (
        children
      )}
    </StyledButton>
  )
}

export const Button = forwardRef(ButtonBase)
