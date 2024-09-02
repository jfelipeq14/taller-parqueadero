import { nameSchema } from '../schemas/name.schema.js'

export class NameModel {
  async get () {
    const data = await nameSchema.find().pretty()
    return data
  }

  async post (obj) {
    const data = await nameSchema.create(obj)
    return data
  }

  async put (id, obj) {
    const data = await nameSchema.findOneAndUpdate(id, obj)
    return data
  }

  async delete (id) {
    const data = await nameSchema.findOneAndRemove(id)
    return data
  }
}
