const db = require('../models');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('test', salt);

const seedUser = async () => {
  console.log('seeding user')
    await db.Users.create({
        name: 'test',
        username: 'test123',
        email: 'test@email.com',
        password: hash,
        createdAt: new Date('2021', '5', '7', '02', '13'),
        updatedAt: new Date('2021', '5', '7', '02', '13')
  })
}

module.exports = seedUser;