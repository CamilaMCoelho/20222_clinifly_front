import { ReactElement, useContext } from 'react'
import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie, parseCookies } from 'nookies'

import { Input } from '../components/Input'
import { Button } from '../components/Button'
import DefaultLayout from '../components/Layouts/DefaultLayout'

import { api } from '../services/api'

import {
  BoxForm,
  LoginContainer,
  RegistrationButton,
} from '../styles/pages/login'
import { AuthContext } from '../contexts/AuthContext'

const loginValidationFormData = z.object({
  email: z.string().email('Informe seu email').min(1, 'Informe seu email'),
  password: z.string().min(6, 'No mínimo 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginValidationFormData>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginValidationFormData),
  })

  const router = useRouter()

  const { setIsAuthenticated } = useContext(AuthContext)

  async function onSubmit({ email, password }: LoginFormData) {
    try {
      const response = await api.post('eventos', {
        type: 'patientAuth',
        data: { email, password },
      })

      setCookie(undefined, 'cliniflyToken', response.data.accessToken, {
        maxAge: 60 * 60 * 24 * 30, // 1 Mês
        path: '/',
      })

      setIsAuthenticated(true)

      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LoginContainer>
      <BoxForm>
        <h4>Login</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email')}
            name="email"
            placeholder="Email"
            error={errors.email}
          />
          <Input
            {...register('password')}
            type="password"
            name="password"
            placeholder="Senha"
            error={errors.password}
          />

          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Entrar
          </Button>
        </form>
        <p>
          Não possui uma conta?
          <RegistrationButton href="/cadastro">Cadastre-se</RegistrationButton>
        </p>
      </BoxForm>
    </LoginContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx)

  if (cookies.cliniflyToken) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
