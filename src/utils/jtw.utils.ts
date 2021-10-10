import jwt from 'jsonwebtoken'
import config from 'config'

const privateKey = config.get<string>('privateKey')

export const signJwt = (object: Object) => {
  return jwt.sign(object, privateKey, { expiresIn: '15m' })
}

export const verifyJwt = (token: string) => {
  try {
    const decoded = jwt.verify(token, privateKey)

    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt expired',
      decoded: null
    }
  }
}
