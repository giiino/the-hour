const initDB = require('../../service/initDB')

const handler = async () => {
  await initDB()
}

export { handler }
