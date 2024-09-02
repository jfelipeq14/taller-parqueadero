import { CeldasSchema } from '../schemas/celdas.schema.js'

export class CeldasModel {
  async get () {
    const data = await CeldasSchema.find()
    return data
  }

  async getById (numeroCelda) {
    const data = await CeldasSchema.findOne({ numeroCelda })
    return data
  }

  async getAvailable () {
    const data = await CeldasSchema.find({ estado: true })
    return data
  }

  async post (obj) {
    // crear un documento en la coleccion
    const data = await new CeldasSchema(obj).save()
    return data
  }

  async patch (numeroCelda, obj) {
    const data = await CeldasSchema.findOneAndUpdate({ numeroCelda }, obj, { new: true })
    return data
  }

  async delete (numeroCelda) {
    const data = await CeldasSchema.findOneAndDelete({ numeroCelda })
    return data
  }
}
