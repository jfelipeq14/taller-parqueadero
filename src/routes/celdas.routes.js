import { Router } from 'express'
import { CeldasController } from '../controllers/celdas.controller.js'

export const createCeldasRouter = ({ celdasModel }) => {
  const celdasRouter = Router()

  const celdasController = new CeldasController({ celdasModel })

  celdasRouter.get('/', celdasController.get)
  celdasRouter.post('/', celdasController.post)
  celdasRouter.patch('/:numeroCelda', celdasController.patch)
  celdasRouter.delete('/:numeroCelda', celdasController.delete)

  return celdasRouter
}
