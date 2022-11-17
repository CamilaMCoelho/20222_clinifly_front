import { useRouter } from 'next/router'
import Image from 'next/image'
import { SignOut } from 'phosphor-react'
import { destroyCookie } from 'nookies'

import cliniflyLogo from '../../assets/cliniflyLogo.svg'

import { HeaderContainer, LogOutButton } from './styles'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

export function Header() {
  const router = useRouter()

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

  function logOut() {
    destroyCookie(undefined, 'cliniflyToken', {
      path: '/',
    })

    setIsAuthenticated(false)

    router.push('/')
  }

  return (
    <HeaderContainer>
      <div className="alignCenterContainer">
        <Image src={cliniflyLogo} alt="" width={200} sizes="100vw" priority />
        {isAuthenticated && (
          <LogOutButton onClick={logOut}>
            <SignOut size={32} />
          </LogOutButton>
        )}
      </div>
    </HeaderContainer>
  )
}
