import NextAuth from 'next-auth'
import OneLoginProvider from 'next-auth/providers/onelogin'

export default NextAuth({
  providers: [
    OneLoginProvider({
      clientId: process.env.ONELOGIN_CLIENT_ID,
      clientSecret: process.env.ONELOGIN_CLIENT_SECRET,
      issuer: process.env.ONELOGIN_ISSUER,
    }),
  ],
})