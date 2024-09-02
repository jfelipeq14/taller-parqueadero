// config
import { Server } from './models/server.js'

// routes
import { createNameRouter } from './routes/name.routes.js'

// models
import { NameModel } from './models/name.model.js'

const server = new Server()
const nameModel = new NameModel()

server.app.use('/name', createNameRouter({ nameModel }))

server.dbConnection()
server.listen()
