// config
import { Server } from './models/server.js'

// routes
import { createCeldasRouter } from './routes/celdas.routes.js'

// models
import { CeldasModel } from './models/celdas.model.js'

const server = new Server()
const celdasModel = new CeldasModel()

server.app.get('/', (req, res) => {
  res.send('Taller del parqueadero')
})
server.app.use('/celdas', createCeldasRouter({ celdasModel }))

server.dbConnection()
server.listen()
