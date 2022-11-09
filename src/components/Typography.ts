import styled, { css } from 'styled-components'

interface TitleTextProps {
  color?: 'title' | 'subtitle' | 'text'
  size?: 'xl' | 'l' | 'm' | 's' | 'xs'
  weight?: number | string
}

interface RegularTextProps {
  color?: 'text' | 'subtitle' | 'label'
  size?: 'l' | 'm' | 's'
  weight?: number | string
}

interface ComponentTextProps {
  type?: 'tag' | 'button'
  size?: 'g' | 's'
  weight?: number | string
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontSizes[`title-title-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 800};
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.fontSizes[`text-regular-${size ?? 'm'}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 400};
`

export const ComponentText = styled.p<ComponentTextProps>`
  color: ${({ theme }) => theme.colors[`brand-yellow-dark`]};
  font-size: ${({ theme }) => theme.fontSizes[`component-tag`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: 130%;
  font-weight: ${({ weight }) => weight ?? 700};

  ${({ theme, type, size }) =>
    type === 'button' &&
    css`
      color: ${theme.colors['base-white']};
      font-size: ${theme.fontSizes[`component-button-${size ?? 's'}`]};
    `}
`
