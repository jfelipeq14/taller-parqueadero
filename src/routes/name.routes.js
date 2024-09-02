import { Router } from 'express'
import { NameController } from '../controllers/name.controller.js'

export const createNameRouter = ({ nameModel }) => {
  const nameRouter = Router()

  const nameController = new NameController({ nameModel })

  nameRouter.get('/', nameController.get)
  nameRouter.post('/', nameController.post)
  nameRouter.put('/:id', nameController.put)
  nameRouter.delete('/:id', nameController.delete)

  return nameRouter
}
