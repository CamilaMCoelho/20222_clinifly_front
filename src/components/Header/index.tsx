import Link from 'next/link'
import { MapPin, ShoppingCart } from 'phosphor-react'

// import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="alignCenterContainer">
        <h1>Clinifly</h1>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>

          <Link href="/checkout">
            <HeaderButton variant="yellow">
              <ShoppingCart size={22} weight="fill" />
              {/* <span>3</span> */}
            </HeaderButton>
          </Link>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
