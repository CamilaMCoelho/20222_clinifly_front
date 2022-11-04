import { Minus, Plus } from 'phosphor-react'

import { IconWrapper, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper type='button'>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper type='button'>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
