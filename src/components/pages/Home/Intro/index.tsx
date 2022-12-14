import Image from 'next/image'
import { CalendarCheck, FirstAid } from 'phosphor-react'
import { useTheme } from 'styled-components'

import introBannerLoginImg from '../../../../assets/login-banner-clinifly.png'

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
              Encontre sua consulta perfeita para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Clinifly você tem saúde onde estiver, a qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              icon={<CalendarCheck size={16} weight="fill" />}
              text="Agendamento online"
              backgroundIcon={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              icon={<FirstAid size={16} weight="fill" />}
              text="Médicos conveniados"
              backgroundIcon={colors['brand-yellow']}
            />
          </BenefitsContainer>
        </div>

        <Image
          src={introBannerLoginImg}
          alt=""
          sizes="100vw"
          width={480}
          height={360}
          quality={100}
          priority
        />
      </IntroContent>
    </IntroContainer>
  )
}
