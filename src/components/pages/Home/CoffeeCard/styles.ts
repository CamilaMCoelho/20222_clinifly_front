import {styled} from '../../../../styles/theme'

import {
  ComponentText,
  RegularText,
  TitleText,
} from '../../../../components/Typography'

export const CoffeeCardContainer = styled('div', {
  width: '100%',
  background: '$base-card',
  borderRadius: '6px 36px',
  padding: '1.25rem',
  paddingTop: 0,
  textAlign: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  '> img' {
    width: '7.5rem',
    height: '7.5rem',
    marginTop: '-1.25rem',
  }
})

export const Tags = styled('div', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',

  marginTop: '0.75rem',
  marginBottom: '1rem',
  flexWrap: 'wrap',
})


export const CoffeeTag = styled(ComponentText).attrs({
  as: 'span',
})`
  padding: '0.25rem 0.5rem',
  background: ${({ theme }) => theme.colors['brand-yellow-light']},
  borderRadius: 100px,

  textTransform: uppercase,
`

export const CoffeeName = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: 700,
  as: 'h3',
})`
  margin-bottom: 0.5rem,
`

export const DescriptionCoffee = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 2rem,
`

export const CardFooter = styled.footer`
  width: 100%,

  display: flex,
  alignItems: center,
  justifyContent: space-between,

  > div {
    display: flex,
    alignItems: center,
    gap: 0.5rem,
  }
`

export const AddCartWrapper = styled.div`
  width: 7.375rem,

  > button {
    width: 2.375rem,
    height: 2.375rem,
    background: ${({ theme }) => theme.colors['brand-purple-dark']},
    color: ${({ theme }) => theme.colors['base-card']},
    border: 0,
    borderRadius: 6px,

    display: flex,
    alignItems: center,
    justifyContent: center,

    transition: 0.4s,

    '&:hover' {
      background: ${({ theme }) => theme.colors['brand-purple']},
    }
  }
`
