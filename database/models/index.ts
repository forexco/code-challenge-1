
// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// };

require('dotenv').config();
const { Sequelize } = require('sequelize');
// const env = process.env.NODE_ENV || 'development';
// const config = require('../config/config.json')[env];

// const dbURI=config[env].uri;

const db = {};
const DATABASE_URI = process.env.DATABASE_URI;
// const foo = process.env.FOO;
// const NODE_ENV=process.env.NODE_ENV;
// const env=process.env;
// console.log(`ENV:${env}`);
// console.log(`NODE_ENV:${NODE_ENV}`);
console.log(`dbURI:${DATABASE_URI}`);
// console.log(`FOO:${foo}`);
// Passing a connection URI
// const sequelize = new Sequelize(DATABASE_URI, {
const sequelize = new Sequelize("postgres://whktcalcfxaozo:28c1ee0fe107da0d8d192123a003ca8d406adedb1caf64ce6ce0a6bcde6f0a38@ec2-54-164-56-10.compute-1.amazonaws.com:5432/da1si5vp3hl089", {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
    keepAlive: true,
  },
  ssl: true,
});

async function connectionTest() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connectionTest();


// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
