export class CeldasController {
  constructor ({ celdasModel }) {
    this.celdasModel = celdasModel
  }

  get = async (req, res) => {
    const data = await this.celdasModel.get()
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.celdasModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.celdasModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.celdasModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
