import { Schema, model } from 'mongoose'

const celdasSchema = new Schema({
  numeroCelda: {
    type: Number,
    unique: [true, 'El valor no puede ser repetido'],
    max: 10
  },
  estado: {
    type: Boolean,
    default: true
  },
  placa: {
    type: String,
    maxLength: [6, 'La placa no puede ser mayor a 6 caracteres']
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

celdasSchema.statics.incrementNumber = async function () {
    const lastCell = await this.findOne().sort({ numeroCelda: -1 });
    return lastCell ? lastCell.number + 1 : 1;
};

export const CeldasSchema = model('Celdas', celdasSchema)
