import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.colors.primary};
      font-weight: 700;

      & + div {
        margin-top: 2ch;
      }

      input {
        width: 40ch;
        height: 5ch;
        padding: 1.5ch 2ch;
        border: 2px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        background: rgba(0, 0, 0, 0);
        border-radius: 5px;
        font-family: 'Roboto';
      }
    }
  }
`
export const Button = styled.button`
  padding: 1.2ch 1.5ch;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  font: 700 16px Roboto, sans-serif;
  cursor: pointer;
  transition: 0.4s;
  margin-top: 3ch;

  & :hover {
    padding: 1.25ch 1.55ch;
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
`
