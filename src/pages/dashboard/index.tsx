import Head from 'next/head'

import Router from 'next/router'
import { signOut, useSession } from 'next-auth/client'

import { Button, Container } from '../../styles/pages/Home'

export default function Dashboard(): JSX.Element {
  const [session, loading] = useSession()

  if (loading) {
    return (
      <Container>
        <h2>Carregando...</h2>
        <p>Aguente um pouquinho 🤏</p>
      </Container>
    )
  }

  if (!session) Router.push('/login')
  return (
    <Container>
      <Head>
        <title>Next + Prisma | {session?.user.name}</title>
      </Head>
      <h1>Dashboard</h1>
      <p>Bem-vindx de volta, {session?.user.name}</p>
      <Button onClick={() => signOut()}>Fazer logout</Button>
    </Container>
  )
}
