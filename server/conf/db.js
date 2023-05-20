const MYSQL_CONF = {
  host: 'db4free.net',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE
}

module.exports = {
  MYSQL_CONF
}
