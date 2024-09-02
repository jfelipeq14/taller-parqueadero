import { Schema, model } from 'mongoose'

const celdasSchema = new Schema({
  numeroCelda: {
    type: Number,
    unique: true,
    required: true,
    default: { $inc: { numeroCelda: +1 } }
  },
  estado: {
    type: Boolean,
    default: true
  },
  placa: {
    type: String,
    maxlength: 6
  },
  ingreso: {
    type: Date
  },
  salida: {
    type: Date
  },
  pin: {
    type: String
  }
})

export const CeldasSchema = model('Celdas', celdasSchema)
