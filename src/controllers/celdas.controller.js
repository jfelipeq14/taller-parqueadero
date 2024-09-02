export class CeldasController {
  constructor ({ celdasModel }) {
    this.celdasModel = celdasModel
  }

  get = async (req, res) => {
    const data = await this.celdasModel.get()
    res.status(200).json(data)
  }

  getById = async (req, res) => {
    const data = await this.celdasModel.getById(req.params.numeroCelda)
    res.status(200).json(data)
  }

  getAvailable = async (req, res) => {
    const data = await this.celdasModel.getAvailable()
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.celdasModel.post(req.body)
    res.status(201).json(data)
  }

  patch = async (req, res) => {
    const data = await this.celdasModel.patch(req.params.numeroCelda, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.celdasModel.delete(req.params.numeroCelda)
    res.status(200).json(data)
  }
}
