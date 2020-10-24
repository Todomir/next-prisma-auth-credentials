import { FormEvent, useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'

import { signIn, useSession } from 'next-auth/client'

import { Button, Container } from '../styles/pages/Home'
import Router from 'next/router'

export default function Login(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [session] = useSession()

  function handleLogin(e: FormEvent) {
    e.preventDefault()
    signIn('credentials', { email, password })
    Router.push('/dashboard')
  }

  if (session) {
    Router.push('/dashboard')
  }

  return (
    <Container>
      <Head>
        <title>Next + Prisma</title>
      </Head>

      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button type="submit">Login</Button>
        <NextLink href="/" passHref>
          <Button type="submit">Voltar à página inicial</Button>
        </NextLink>
      </form>
    </Container>
  )
}
