import { ReactNode } from 'react'
import { InfoWithIconContainer, IconContainer } from './styles'

interface InfoWithIconProps {
  icon: ReactNode
  text: string | ReactNode
  backgroundIcon: string
}

export function InfoWithIcon({
  icon,
  text,
  backgroundIcon,
}: InfoWithIconProps) {
  return (
    <InfoWithIconContainer>
      <IconContainer backgroundIcon={backgroundIcon}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  )
}
