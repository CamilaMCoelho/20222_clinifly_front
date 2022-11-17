import {
  ComponentRef,
  ForwardRefRenderFunction,
  forwardRef,
  ComponentProps,
} from 'react'
import ReactSelect from 'react-select'
import AsyncSelect from 'react-select/async'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

import {
  SelectContainer,
  StyledReactSelect,
  StyledDynamicSelect,
  ErrorMessage,
} from './styles'

export interface Option {
  readonly value: string
  readonly label: string
}

type SelectInputType = Omit<ComponentProps<typeof ReactSelect>, 'theme'> & {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<Option>>
  label: string
}

type AsyncSelectInputType = Omit<
  ComponentProps<typeof AsyncSelect>,
  'theme'
> & {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<Option>>
  label: string
}

const SelectBase: ForwardRefRenderFunction<
  ComponentRef<typeof ReactSelect>,
  SelectInputType
> = ({ name, label, error, ...props }, ref) => {
  return (
    <SelectContainer>
      {!!label && <label htmlFor={name}>{label}</label>}
      <StyledReactSelect
        id={name}
        instanceId={name}
        ref={ref}
        name={name}
        classNamePrefix="Select"
        noOptionsMessage={() => 'Sem opções'}
        isInvalid={!!error}
        isSearchable={false}
        {...props}
      />
    </SelectContainer>
  )
}

const AsyncSelectBase: ForwardRefRenderFunction<
  ComponentRef<typeof AsyncSelect>,
  AsyncSelectInputType
> = ({ name, label, error, ...props }, ref) => {
  return (
    <SelectContainer>
      {!!label && <label htmlFor={name}>{label}</label>}
      <StyledDynamicSelect
        id={name}
        instanceId={name}
        ref={ref}
        name={name}
        classNamePrefix="Select"
        loadingMessage={() => 'Carregando...'}
        noOptionsMessage={() => 'Sem opções'}
        isInvalid={!!error}
        defaultOptions
        cacheOptions
        {...props}
      />
      {!!error && (
        <ErrorMessage textAlignCenter={false}>
          {error.message === 'Required' ? 'Selecione um médico' : error.message}
        </ErrorMessage>
      )}
    </SelectContainer>
  )
}

export const Select = forwardRef(SelectBase)
export const DynamicSelect = forwardRef(AsyncSelectBase)
