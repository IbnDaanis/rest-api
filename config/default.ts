import { config } from 'dotenv'
config()

export default {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXzZerpx9qdaelwt1U7NCpWXQK
km1OW4ohDF/7g01xDtYf8Nox9wzhhVQrFD+G4eaJoWxIhJYQTgT4ijMlpjXs07Mc
oBRd3RAsqxeCKwKrswIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: process.env.PRIVATE_KEY!.replace(/\\n/g, '\n')
}
