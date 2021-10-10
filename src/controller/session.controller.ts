import { Request, Response } from 'express'
import config from 'config'
import { createSession } from '../service/session.service'
import { validatePassword } from '../service/user.service'
import { signJwt } from '../utils/jtw.utils'

export const createUserSessionHandler = async (req: Request, res: Response) => {
  try {
    const user = await validatePassword(req.body)

    if (!user) {
      return res.status(401).send('Invalid email or password')
    }

    const session = await createSession(user._id, req.get('user-agent') || '')

    const accessToken = signJwt({
      ...user,
      session: session._id
    })

    const refreshToken = signJwt({
      ...user,
      session: session._id
    })

    return res.send({ accessToken, refreshToken })
  } catch (error: any) {
    return res.send(error.message)
  }
}
