import { Container, Subtitle, Title } from '../styles/pages/User'

interface Props {
  name: string
  email: string
}

const User: React.FC<Props> = ({ name, email }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Subtitle>{email}</Subtitle>
    </Container>
  )
}

export default User
