import Head from 'next/head'
import NextLink from 'next/link'

import { signOut, useSession } from 'next-auth/client'

import { Button, Container } from '../styles/pages/Home'

export default function Home(): JSX.Element {
  const [session, loading] = useSession()

  if (loading) {
    return (
      <Container>
        <h2>Carregando...</h2>
        <p>Aguarde um momento</p>
      </Container>
    )
  }
  return (
    <Container>
      <Head>
        <title>Next + Prisma</title>
      </Head>
      <h1>Hello, world!</h1>
      {session && <p>Welcome, {session.user.name}</p>}
      {session ? (
        <Button
          onClick={() => {
            signOut()
          }}
        >
          Logout
        </Button>
      ) : (
        <NextLink href="/login" passHref>
          <Button>Login</Button>
        </NextLink>
      )}
    </Container>
  )
}
