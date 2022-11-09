import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > label {
    font-size: 1rem;
    font-weight: 700;
  }
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem 0.875rem;
  font-size: 0.875rem;

  border-radius: 4px;
  border: 0;
`
