import { DocumentDefinition } from 'mongoose'
import { UserDocument, UserModel } from '../models/user.model'

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await UserModel.create(input)
  } catch (error: any) {
    throw new Error(error)
  }
}
