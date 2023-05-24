const initDB = require('../service/initDB')

module.exports = async (req, res) => {
  const result = await initDB()
  req.json(result)
}
