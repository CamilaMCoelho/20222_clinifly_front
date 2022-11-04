import { styled } from '../../styles/theme'

export const HeaderContainer = styled('header', {
  width: '100%',
  background: '$base-background',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '2rem',

  position: 'sticky',
  top: 0,
  left: 0,
  zIndex: 999,

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});


export const HeaderButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const HeaderButton = styled('button', {
  position: 'relative',
  background: '$brand-purple-light',
  color: '$brand-purple-dark',

  fontSize:'$text-regular-s',

  padding: '0.5rem',
  borderRadius: '6px',
  border: 0,

  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',

  variants: {
    variant: {
      purple: { background: '$brand-purple-light', color: '$brand-purple-dark', 'svg': {
        color: '$brand-purple',
      } },
      yellow: { background: '$brand-yellow-light', color: '$brand-yellow-dark' },
    },
  },
});
