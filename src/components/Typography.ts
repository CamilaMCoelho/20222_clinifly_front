import { styled } from '../styles/theme'

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

export const TitleText = styled('h1', {
  fontFamily: '$title',
  fontWeight: '$$weight' ?? '800',
  lineHeight: 1.3,

  variants: {
    color: {
      title: {
        color: '$base-title'
      },
      subtitle: {
        color: '$base-subtitle'
      },
      text: {
        color: '$base-text'
      }
    },
    size: {
      xl: {
        fontSize: '$title-title-xl'
      },
      l: {
        fontSize: '$title-title-l'
      },
      m: {
        fontSize: '$title-title-m',
      },
      s: {
        fontSize: '$title-title-s',
      },
      xs: {
        fontSize: '$title-title-xs',
      },
    }
  }
})

export const RegularText = styled('p', {
  fontFamily: '$regular',
  fontWeight: '$$weight' ?? '400',
  lineHeight: 1.3,

  variants: {
    color: {
      text: {
        color: '$base-text'
      },
      subtitle: {
        color: '$base-subtitle'
      },
      label: {
        color: '$base-label'
      }
    },
    size: {
      l: {
        fontSize: '$text-regular-l'
      },
      m: {
        fontSize: '$text-regular-m',
      },
      s: {
        fontSize: '$text-regular-s',
      },
    }
  }
})

export const ComponentText = styled('p', {
  fontFamily: '$regular',
  fontWeight: '$$weight' ?? '700',
  lineHeight: 1.3,

  defaultVariants: {
    type: 'tag'
  },

  variants: {
    type: {
      button: {
        fontSize: `$component-button-${'$$size' ?? 's'}`,
        color: '$base-white',
      },
      tag: {
        fontSize: '$component-tag',
        color: '$brand-yellow-dark',
      }
    }
  }
})

// export const TitleText = styled.h1<TitleTextProps>`
//   color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
//   font-size: ${({ theme, size }) =>
//     theme.fontSizes[`title-title-${size ?? 'm'}`]};
//   font-family: ${({ theme }) => theme.fonts.title};
//   line-height: 130%;
//   font-weight: ${({ weight }) => weight ?? 800};
// `

// export const RegularText = styled.p<RegularTextProps>`
//   color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
//   font-size: ${({ theme, size }) =>
//     theme.fontSizes[`text-regular-${size ?? 'm'}`]};
//   font-family: ${({ theme }) => theme.fonts.regular};
//   line-height: 130%;
//   font-weight: ${({ weight }) => weight ?? 400};
//`

// export const ComponentText = styled.p<ComponentTextProps>`
//   color: ${({ theme }) => theme.colors[`brand-yellow-dark`]};
//   font-size: ${({ theme }) => theme.fontSizes[`component-tag`]};
//   font-family: ${({ theme }) => theme.fonts.regular};
//   line-height: 130%;
//   font-weight: ${({ weight }) => weight ?? 700};

//   ${({ theme, type, size }) =>
//     type === 'button' &&
//     css`
//       color: ${theme.colors['base-white']};
//       font-size: ${theme.fontSizes[`component-button-${size ?? 's'}`]};
//     `}
// `
