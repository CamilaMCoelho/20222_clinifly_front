import { useRouter } from 'next/router'
import { Input } from '../components/Input'

import {
  BoxForm,
  LoginButton,
  LoginContainer,
  RegistrationButton,
} from '../styles/pages/login'

export default function Login() {
  const router = useRouter()

  function onSubmit() {
    router.push('/home')
  }

  return (
    <LoginContainer>
      <BoxForm>
        <h4>Login</h4>
        <form onSubmit={onSubmit}>
          <Input name="email" placeholder="Email" />
          <Input type="password" name="password" placeholder="Senha" />

          <LoginButton type="submit">Entrar</LoginButton>
        </form>
        <p>
          Não possui uma conta?
          <RegistrationButton href="/cadastro">Cadastre-se</RegistrationButton>
        </p>
      </BoxForm>
    </LoginContainer>
  )
}

// Login.getLayout = function getLayout(page: ReactElement) {
//   return <DefaultLayout>{page}</DefaultLayout>
// }
