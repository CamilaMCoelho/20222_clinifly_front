import { Input } from '../components/Input'
import {
  BoxForm,
  RegisterButton,
  RegistrationContainer,
} from '../styles/pages/registration'

export default function Registration() {
  return (
    <RegistrationContainer>
      <BoxForm>
        <h4>Cadastro</h4>
        <form onSubmit={() => {}}>
          <section>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite aqui"
              textAlignCenter
              labelTextAlignCenter
            />
            <Input
              name="cpf"
              label="CPF"
              placeholder="Digite aqui"
              textAlignCenter
              labelTextAlignCenter
            />
          </section>
          <section>
            <Input
              name="phone"
              label="Telefone"
              placeholder="Digite aqui"
              textAlignCenter
              labelTextAlignCenter
            />
            <Input
              type="number"
              name="age"
              label="Idade"
              placeholder="Digite aqui"
              textAlignCenter
              labelTextAlignCenter
            />
          </section>
          <section>
            <Input
              name="email"
              label="Email"
              placeholder="Digite aqui"
              textAlignCenter
              labelTextAlignCenter
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              placeholder="******"
              textAlignCenter
              labelTextAlignCenter
            />
          </section>
          <Input
            type="password"
            name="confirmPassword"
            label="Confirmar Senha"
            placeholder="******"
            textAlignCenter
            labelTextAlignCenter
          />
          <RegisterButton type="submit">Entrar</RegisterButton>
        </form>
      </BoxForm>
    </RegistrationContainer>
  )
}
