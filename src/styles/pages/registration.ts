import styled from 'styled-components'

export const RegistrationContainer = styled.main`
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

    display: grid;
    gap: 1rem;

    margin-top: 2rem;

    > section {
      display: grid;
      grid-template-columns: repeat(auto-fit, 200px);
      justify-content: space-between;
    }
  }

  > p {
    width: 100%;

    display: flex;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  }
`
