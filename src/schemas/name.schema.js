import { Schema } from 'mongoose'

export const nameSchema = new Schema({
  data1: {
    type: String,
    required: true
  },
  data2: {
    type: Number,
    required: true
  }
})
