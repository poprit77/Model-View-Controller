



const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    // console.log ("USERUSERUSUE")
    await seedPosts();
    await seedComments();
  
  
    process.exit(0);
  };
  
  seedAll();