import { Schema, model } from 'mongoose'

const celdasSchema = new Schema({
  numeroCelda: {
    type: Number,
    unique: [true, 'El valor no puede ser repetido'],
    default: 1
  },
  estado: {
    type: Boolean,
    default: true
  },
  placa: {
    type: String,
    maxlength: [6, 'La placa no puede ser mayor a 6 caracteres']
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
