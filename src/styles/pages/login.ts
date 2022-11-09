import styled from 'styled-components'

export const LoginContainer = styled.main`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const BoxForm = styled.div`
  width: 100%;
  max-width: 500px;

  padding: 1.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 4px;

  > h4 {
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1.5rem;
  }

  > form {
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 2rem;
  }

  > p {
    width: 100%;

    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  }
`

export const LoginButton = styled.button`
  width: 100%;

  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: white;
  font-weight: 700;
  text-align: center;

  border: 2px solid transparent;
  border-radius: 4px;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  margin-top: 1rem;

  background: #0ea5e9;

  &:hover {
    background: #0284c7;
  }
`

export const RegistrationButton = styled.a`
  text-decoration: none;

  width: 100%;
  max-width: 248px;

  padding: 0.625rem 0.875rem;
  font-size: 0.875rem;
  color: white;
  font-weight: 700;
  text-align: center;

  border: 2px solid transparent;
  border-radius: 4px;

  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  background: #ef4444;

  &:hover {
    background: #dc2626;
  }
`
