export class NameController {
  constructor ({ nameModel }) {
    this.nameModel = nameModel
  }

  get = async (req, res) => {
    const data = await this.nameModel.get()
    res.status(200).json(data)
  }

  post = async (req, res) => {
    const data = await this.nameModel.post(req.body)
    res.status(201).json(data)
  }

  put = async (req, res) => {
    const data = await this.nameModel.put(req.params.id, req.body)
    res.status(200).json(data)
  }

  delete = async (req, res) => {
    const data = await this.nameModel.delete(req.params.id)
    res.status(200).json(data)
  }
}
