import { styled } from "../../styles/theme";

export const QuantityInputContainer = styled('div', {
  flex: 1,
  minHeight: '2.375rem',

  background: '$base-button',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',

  borderRadius: '6px',
  padding: '0.5rem',

  '& > input': {
    width: '100%',
    textAlign: 'center',
    background: 'none',
    border: 0,
    color: '$base-title',
  }
})


export const IconWrapper = styled('button', {
  width: '0.875rem',
  height: '0.875rem',
  border: 0,
  background: 'none',
  color: '$brand-purple',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: '0.4s',

  '&:hover': {
    color: '$brand-purple-dark',
  }
})
