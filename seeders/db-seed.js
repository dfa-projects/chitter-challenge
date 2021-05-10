const db = require('../models')

const seedDatabase = async () => {
  console.log('seeding database')
    await db.Peeps.create({
    peep: 'test peep',
    createdAt: new Date('2021', '5', '9', '17', '27'),
    updatedAt: new Date('2021', '5', '9', '17', '27'),
  }, {
    include: [{
      association: db.Peeps.User
    }]
  });
}

module.exports = seedDatabase