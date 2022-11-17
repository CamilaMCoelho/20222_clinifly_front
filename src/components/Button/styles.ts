import styled, { keyframes } from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;

  background: ${({ theme }) => theme.colors['button-blue-500']};
  color: ${({ theme }) => theme.colors.white};

  border: 0;
  border-radius: 4px;

  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  text-align: center;
  font-weight: 700;

  border: 2px solid transparent;
  border-radius: 4px;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ theme }) => theme.colors['button-blue-600']};
  }
`

export const SpinContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const spin = keyframes`
  from {
      transform: rotate(0turn);
    }

  to {
      transform: rotate(1turn);
  }
`

export const Spin = styled.div`
  display: inline-block;
  border: 2px solid #e2e8f0;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: 0.45s linear 0s infinite normal none ${spin};
  border-bottom-color: transparent;
  border-left-color: transparent;
`
