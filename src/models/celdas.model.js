import { CeldasSchema } from '../schemas/celdas.schema.js'

export class CeldasModel {
  async get () {
    const data = await CeldasSchema.find()
    return data
  }

  async post (obj) {
    const data = await CeldasSchema.create(obj)
    return data
  }

  async put (id, obj) {
    const data = await CeldasSchema.findOneAndUpdate(id, obj)
    return data
  }

  async delete (id) {
    const data = await CeldasSchema.findOneAndRemove(id)
    return data
  }
}
