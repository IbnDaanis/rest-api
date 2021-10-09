import mongoose from 'mongoose'
import config from 'config'
import { log } from './logger'

export const connect = async () => {
  const dbUri = config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)
    return log.info('Connected to the database.')
  } catch (error) {
    log.error('Could not connect to the database')
    process.exit(1)
  }
}
