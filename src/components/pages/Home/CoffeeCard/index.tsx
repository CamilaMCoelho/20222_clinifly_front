import { ShoppingCartSimple } from 'phosphor-react'

import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/Typography'
import { formatPrice } from '../../../../utils/formatPrice'

import {
  CoffeeCardContainer,
  Tags,
  CoffeeTag,
  CoffeeName,
  DescriptionCoffee,
  CardFooter,
  AddCartWrapper,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const formattedPrice = formatPrice(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => (
          <CoffeeTag key={`${coffee.id}${tag}`}>{tag}</CoffeeTag>
        ))}
      </Tags>

      <CoffeeName>{coffee.name}</CoffeeName>
      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
