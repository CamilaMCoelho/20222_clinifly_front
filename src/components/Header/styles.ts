import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-background']};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface LocationButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderButton = styled.button<LocationButtonProps>`
  position: relative;
  background: ${({ theme }) => theme.colors['brand-purple-light']};
  color: ${({ theme }) => theme.colors['brand-purple-dark']};
  font-size: ${({ theme }) => theme.fontSizes['text-regular-s']};
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors['brand-purple']};
      }
    `} /* span {
      position: absolute;
      width: 1.25rem;
      height: 1.25rem;
      top: -8px;
      right: -8.35px;

      font-size: 0.75rem;
      font-weight: bold;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      background: ${({ theme }) => theme.colors['brand-yellow-dark']};
      color: ${({ theme }) => theme.colors['base-white']};
    } */
`
