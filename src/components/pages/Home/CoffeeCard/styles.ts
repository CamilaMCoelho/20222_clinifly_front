import styled from 'styled-components'

import {
  ComponentText,
  RegularText,
  TitleText,
} from '../../../../components/Typography'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  padding-top: 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`

export const Tags = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`

export const CoffeeTag = styled(ComponentText).attrs({
  as: 'span',
})`
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => theme.colors['brand-yellow-light']};
  border-radius: 100px;

  text-transform: uppercase;
`

export const CoffeeName = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: 700,
  as: 'h3',
})`
  margin-bottom: 0.5rem;
`

export const DescriptionCoffee = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 2rem;
`

export const CardFooter = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const AddCartWrapper = styled.div`
  width: 7.375rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    background: ${({ theme }) => theme.colors['brand-purple-dark']};
    color: ${({ theme }) => theme.colors['base-card']};
    border: 0;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`
