import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { MaskInput } from '../components/MaskInput'
import { api } from '../services/api'

import { BoxForm, RegistrationContainer } from '../styles/pages/registration'

const registerValidationFormData = z
  .object({
    name: z.string().min(1, 'Informe seu nome'),
    cpf: z.string().min(1, 'Informe seu CPF'),
    phone: z.string().min(1, 'Informe seu telefone'),
    age: z.string().min(1, 'Informe sua idade'),
    email: z.string().email('Informe seu email').min(1, 'Informe seu email'),
    password: z.string().min(6, 'No mínimo 6 caracteres'),
    confirmPassword: z.string().min(6, 'No mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não conferem',
    path: ['confirmPassword'],
  })

type RegisterFormData = z.infer<typeof registerValidationFormData>

export default function Registration() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerValidationFormData),
    defaultValues: {
      cpf: '',
      age: '',
      phone: '',
    },
  })

  const router = useRouter()

  async function registerOnSubmit({
    confirmPassword,
    age,
    ...data
  }: RegisterFormData) {
    console.log(data)
    try {
      await api.post('eventos', {
        type: 'patientCreated',
        data: {
          ...data,
          age: Number(age),
        },
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <RegistrationContainer>
      <BoxForm>
        <h4>Cadastro</h4>
        <form onSubmit={handleSubmit(registerOnSubmit)}>
          <section>
            <Input
              {...register('name')}
              name="name"
              label="Nome"
              placeholder="Digite aqui"
              error={errors.name}
              textAlignCenter
              labelTextAlignCenter
            />

            <Controller
              name="cpf"
              control={control}
              render={({ field: { onChange, value, ...props } }) => (
                <MaskInput
                  label="CPF"
                  placeholder="Digite aqui"
                  format="###.###.###-##"
                  handleChange={({ formattedValue, value }) => {
                    onChange(formattedValue)
                    setValue('cpf', value)
                  }}
                  error={errors.cpf}
                  textAlignCenter
                  labelTextAlignCenter
                  {...props}
                />
              )}
            />
          </section>
          <section>
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value, ...props } }) => (
                <MaskInput
                  label="Telefone"
                  placeholder="Digite aqui"
                  format="(##) #####-####"
                  handleChange={({ formattedValue, value }) => {
                    onChange(formattedValue)
                    setValue('phone', value)
                  }}
                  error={errors.phone}
                  textAlignCenter
                  labelTextAlignCenter
                  {...props}
                />
              )}
            />

            <Controller
              name="age"
              control={control}
              render={({ field: { onChange, value, ...props } }) => (
                <MaskInput
                  label="Idade"
                  placeholder="Digite aqui"
                  format="##"
                  handleChange={({ formattedValue, value }) => {
                    onChange(formattedValue)
                    setValue('age', value)
                  }}
                  error={errors.age}
                  textAlignCenter
                  labelTextAlignCenter
                  {...props}
                />
              )}
            />
          </section>
          <section>
            <Input
              {...register('email')}
              name="email"
              label="Email"
              placeholder="Digite aqui"
              error={errors.email}
              textAlignCenter
              labelTextAlignCenter
            />
            <Input
              {...register('password')}
              type="password"
              name="password"
              label="Senha"
              placeholder="******"
              error={errors.password}
              textAlignCenter
              labelTextAlignCenter
            />
          </section>
          <Input
            {...register('confirmPassword')}
            type="password"
            name="confirmPassword"
            label="Confirmar Senha"
            placeholder="******"
            error={errors.confirmPassword}
            textAlignCenter
            labelTextAlignCenter
          />
          <Button
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Enviar
          </Button>
        </form>
      </BoxForm>
    </RegistrationContainer>
  )
}
