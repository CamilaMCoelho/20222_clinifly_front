import styled from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  min-height: 2.375rem;

  background: ${({ theme }) => theme.colors['base-button']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 6px;
  padding: 0.5rem;

  > input {
    width: 100%;
    text-align: center;
    background: none;
    border: 0;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.colors['brand-purple']};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors['brand-purple-dark']};
  }
`
