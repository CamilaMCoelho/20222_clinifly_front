import Link from 'next/link'
import Image from 'next/image'
import { SignOut } from 'phosphor-react'

import cliniflyLogo from '../../assets/cliniflyLogo.svg'

import { HeaderContainer, LogOutButton } from './styles'
import { useContext } from 'react'
import { AuthContext, signOut } from '../../contexts/AuthContext'

export function Header() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <HeaderContainer>
      <div className="alignCenterContainer">
        <Link href={'/home'}>
          <Image src={cliniflyLogo} alt="" width={200} sizes="100vw" priority />
        </Link>
        {isAuthenticated && (
          <LogOutButton onClick={signOut}>
            <SignOut size={32} />
          </LogOutButton>
        )}
      </div>
    </HeaderContainer>
  )
}
