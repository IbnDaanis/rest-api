import { NextFunction, Request, Response } from 'express'
import { get } from 'lodash'
import { verifyJwt } from '../utils/jtw.utils'

export const deserialiseUser = (req: Request, res: Response, next: NextFunction) => {
  const accessToken = get(req, 'headers.authorization', '').replace(/^Bearer\s/, '')
  console.log(req.headers.authorization)
  if (!accessToken) {
    return next()
  }

  const { decoded, expired } = verifyJwt(accessToken)
  console.log({ decoded })

  if (decoded) {
    res.locals.user = decoded
    return next()
  }

  return next()
}
