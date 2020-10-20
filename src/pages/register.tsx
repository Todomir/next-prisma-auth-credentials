import { FormEvent, useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'

import axios from 'axios'

import { Button, Container } from '../styles/pages/Home'

export default function Register(): JSX.Element {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister(e: FormEvent) {
    e.preventDefault()
    try {
      const res = await axios.post('/api/user/create', {
        name,
        email,
        password
      })
      return res
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <Head>
        <title>Next + Prisma</title>
      </Head>

      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="name"
            name="name"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
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

        <Button type="submit">Cadastrar</Button>
        <NextLink href="/" passHref>
          <Button type="submit">Voltar à página inicial</Button>
        </NextLink>
      </form>
    </Container>
  )
}
