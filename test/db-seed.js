const db = require('../models');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('test', salt);

const seedDatabase = async () => {
  console.log('seeding database')
    await db.Peeps.create({
    peep: 'test peep',
    createdAt: new Date('2021', '5', '9', '17', '27'),
    updatedAt: new Date('2021', '5', '9', '17', '27'),
    Users: {
      name: 'test',
      username: 'test123',
      email: 'test@email.com',
      password: hash,
      createdAt: new Date('2021', '5', '9', '17', '27'),
      updatedAt: new Date('2021', '5', '9', '17', '27')
    }
  }, {
    include: [{
      association: db.Peeps.Users
    }]
  });
}

module.exports = seedDatabase