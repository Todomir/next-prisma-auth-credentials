import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import { PrismaClient } from '@prisma/client'
import { compare } from 'bcrypt'

const prisma = new PrismaClient()

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Username',
          type: 'text',
          placeholder: 'email@email.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async credentials => {
        const user = await prisma.user.findOne({
          where: { email: credentials.email }
        })

        if (user) {
          compare(credentials.password, user.password, async function (
            err,
            result
          ) {
            if (!err && result) {
              return true
            }
          })
          return Promise.resolve(user)
        } else {
          return Promise.resolve(null)
        }
      }
    })
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
    maxAge: 60 * 60,
    updateAge: 24 * 60 * 60
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  pages: {
    signIn: '/login'
  }
}

export default (req, res) => NextAuth(req, res, options)
