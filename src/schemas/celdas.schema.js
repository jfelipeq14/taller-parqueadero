import { Schema, model } from 'mongoose'

const celdasSchema = new Schema({
  numeroCelda: {
    type: Number,
    unique: true,
    required: true,
    default: { $inc: { numeroCelda: +1 } }
  },
  estado: {
    type: Number,
    required: true
  },
  placa: {
    type: Number,
    required: true
  },
  ingreso: {
    type: Number,
    required: true
  },
  salida: {
    type: Number,
    required: true
  },
  pin: {
    type: Number,
    required: true
  }
})

export const CeldasSchema = model('Celdas', celdasSchema)
