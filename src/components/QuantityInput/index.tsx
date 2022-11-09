import { Minus, Plus } from 'phosphor-react'

import { IconWrapper, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
