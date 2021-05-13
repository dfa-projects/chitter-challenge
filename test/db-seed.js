const db = require('../models');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash1 = bcrypt.hashSync('test1', salt);
const hash2 = bcrypt.hashSync('test2', salt);

const seedDatabase = async () => {
  console.log('seeding database')

  const user = await db.Users.create({
      name: 'user',
      username: 'user1',
      email: 'user1@test.com',
      password: hash1,
      createdAt: new Date('2021', '4', '29', '17', '27'),
      updatedAt: new Date('2021', '4', '29', '17', '27')
  })

  await db.Peeps.create({
    peep: 'test peep',
    createdAt: new Date('2021', '4', '29', '17', '27'),
    updatedAt: new Date('2021', '4', '29', '17', '27'),
    UserId: user.id
  }, {
    include: [{
      association: db.Peeps.Users
    }]
  });

  await db.Users.create({
    name: 'user',
    username: 'user2',
    email: 'user2@test.com',
    password: hash2,
    createdAt: new Date('2021', '5', '8', '02', '13'),
    updatedAt: new Date('2021', '5', '8', '02', '13')
  })
}

module.exports = seedDatabase