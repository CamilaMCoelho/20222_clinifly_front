import { ForwardRefRenderFunction, forwardRef, ForwardedRef } from 'react'
import { FieldError } from 'react-hook-form'
import type { PatternFormatProps } from 'react-number-format'
import type { NumberFormatValues } from 'react-number-format/types/types'

import {
  StyledMaskInput,
  StyledMaskInputContainer,
  ErrorMessage,
} from './styles'

interface MaskInputProps {
  handleChange: (value: NumberFormatValues) => void
  label?: string
  error?: FieldError
  textAlignCenter?: boolean
  labelTextAlignCenter?: boolean
}

type MaskInputType = MaskInputProps & Omit<PatternFormatProps, 'customInput'>

export const MaskInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  MaskInputType
> = (
  {
    name,
    label,
    error,
    format,
    handleChange,
    textAlignCenter = false,
    labelTextAlignCenter = false,
    ...rest
  },
  _ref,
) => {
  return (
    <>
      {label ? (
        <StyledMaskInputContainer $labelTextAlignCenter={labelTextAlignCenter}>
          <label htmlFor={name}>{label}</label>
          <StyledMaskInput
            id={name}
            name={name}
            format={format}
            onValueChange={(values) => handleChange(values)}
            mask="_"
            displayType="input"
            valueIsNumericString
            getInputRef={(inputRef: ForwardedRef<HTMLInputElement>) => {
              _ref = inputRef
            }}
            $isInvalid={!!error}
            $textAlignCenter={textAlignCenter}
            {...rest}
          />
          {!!error && (
            <ErrorMessage textAlignCenter={textAlignCenter}>
              {error.message}
            </ErrorMessage>
          )}
        </StyledMaskInputContainer>
      ) : (
        <StyledMaskInput
          id={name}
          name={name}
          format={format}
          onValueChange={(values) => handleChange(values)}
          mask="_"
          displayType="input"
          valueIsNumericString
          getInputRef={(inputRef: ForwardedRef<HTMLInputElement>) => {
            _ref = inputRef
          }}
          $isInvalid={!!error}
          $textAlignCenter={textAlignCenter}
          {...rest}
        />
      )}
    </>
  )
}

export const MaskInput = forwardRef(MaskInputBase)
