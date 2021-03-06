import { FilterQuery } from 'mongoose'
import { SessionDocument, SessionModel } from '../models/session.model'

export async function createSession(userID: string, userAgent: string) {
  const session = await SessionModel.create({ user: userID, userAgent })
  return session.toJSON()
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return SessionModel.find(query).lean()
}
