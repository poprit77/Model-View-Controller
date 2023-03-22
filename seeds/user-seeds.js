
const { User } = require('../models');

const userData = [
  {
    username: 'peter',
    password: '1234',
    
  },
  {
    username: 'john',
    password: '5678',
  },
  {
    username: 'luke',
    password: '9012',
  }
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUsers;