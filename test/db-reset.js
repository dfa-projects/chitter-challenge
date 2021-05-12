const db = require('../models')

const dbReset = async () => {
  console.log('truncating tables')
  await db.Users.destroy({ truncate : true, cascade: true })
  await db.Peeps.destroy({ truncate : true, cascade: true }) 
}

module.exports = dbReset;