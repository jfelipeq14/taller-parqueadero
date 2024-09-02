import { nameSchema } from '../schemas/name.schema.js'

export class NameModel {
  async get () {
    const data = await nameSchema.find().pretty()
    return data
  }

  async post (obj) {
    const data = await nameSchema.createOne(obj)
    return data
  }

  async put (id, obj) {
    const data = await nameSchema.updateOne(id, obj)
    return data
  }

  async delete (id) {
    const data = await nameSchema.deleteOne(id)
    return data
  }
}
