import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 30ch;
  padding: 2ch;
  background-color: #44337a;
  border-radius: 5px;
  margin: 1ch;

  transition: 0.2s;

  &:hover {
    background-color: #553c9a;
    transform: scale(1.1);
  }
`
export const Title = styled.h3`
  font-size: 1.7ch;
`
export const Subtitle = styled.p`
  font-size: 1.5ch;
  font-weight: 300;
`
