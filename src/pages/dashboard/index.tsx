import Head from 'next/head'
import { GetStaticProps } from 'next'
import Router from 'next/router'

import { signOut, useSession } from 'next-auth/client'
import { PrismaClient } from '@prisma/client'

import { Button, Container } from '../../styles/pages/Home'
import User from '../../components/User'

interface Props {
  users: [
    {
      id: string
      name: string
      email: string
    }
  ]
}

export const getStaticProps: GetStaticProps = async () => {
  const prisma = new PrismaClient()
  const users = await prisma.user.findMany()
  return {
    props: { users }
  }
}

export default function Dashboard({ users }: Props): JSX.Element {
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

      {users.map(user => (
        <User key={user.id} name={user.name} email={user.email} />
      ))}

      <Button onClick={() => signOut()}>Fazer logout</Button>
    </Container>
  )
}
