import { getSession } from 'next-auth/react'

export default async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    res.status(200).json({ status: `signed in as: ${session.user.email}` })
  } else {
    res.status(401).json({ status: `not signed in` })
  }
}