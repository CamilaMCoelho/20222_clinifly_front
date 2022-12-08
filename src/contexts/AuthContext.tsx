import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

interface SignInCredentials {
  email: string
  password: string
}

interface User {
  name?: string
  accessToken: string
}

interface AuthContextData {
  signIn({ email, password }: SignInCredentials): Promise<void>
  isAuthenticated: boolean
  user: User | null
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  destroyCookie(undefined, 'cliniflyToken', {
    path: '/',
  })
  Router.push('/')
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const cookies = parseCookies()
    if (!cookies.cliniflyToken) {
      setUser(null)
    } else {
      setUser({ name: undefined, accessToken: cookies.cliniflyToken })
    }
  }, [])

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('eventos', {
        type: 'patientAuth',
        data: { email, password },
      })

      console.log(response)

      const { name, accessToken } = response.data

      setCookie(undefined, 'cliniflyToken', accessToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/',
      })

      setUser({ name, accessToken })

      Router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
