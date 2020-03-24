const connection = require('../database/index')

module.exports = {

  async list(req, res) {
    const incidents = await connection.select().table('incidents')
    console.log(incidents)
    return res.json(incidents)
  },

  async create(req, res) {
    const { title, description, value } = req.body
    const ong_id = req.headers.authorization

    const incident = {
      title: title,
      description: description,
      ong_id: ong_id,
      value: value
    }
    console.log(incident)
    const [id] = await connection('incidents').insert(incident)
    return res.json({ id })
  },

  async delete(req, res) {
    const { id } = req.params
    console.log(id)
    await connection('incidents')
      .where('id', id)
      .del()
    return res.json({ id })
  }

}
