import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

import introCoffeeImg from '../../../../assets/intro-coffee.png'

import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { RegularText } from '../../../../components/Typography'

import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from './styles'

export function Intro() {
  const { colors } = useTheme()

  return (
    <IntroContainer>
      <IntroContent className="alignCenterContainer">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart size={16} weight="fill" />}
              text="Compra simples e segura"
              backgroundIcon={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              icon={<Timer size={16} weight="fill" />}
              text="Embalagem mantém o café intacto"
              backgroundIcon={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<Package size={16} weight="fill" />}
              text="Entrega rápida e rastreada"
              backgroundIcon={colors['base-text']}
            />
            <InfoWithIcon
              icon={<Coffee size={16} weight="fill" />}
              text="O café chega fresquinho até você"
              backgroundIcon={colors['brand-purple']}
            />
          </BenefitsContainer>
        </div>

        <img src={introCoffeeImg} alt="" />
      </IntroContent>
    </IntroContainer>
  )
}
