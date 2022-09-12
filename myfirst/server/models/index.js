'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config.json')[env];
//const Subscribe = require('./subscribe');
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.User=require('./user')(sequelize,Sequelize);
db.Post=require('./post')(sequelize,Sequelize);
db.Hashtag=require('./hashtag')(sequelize,Sequelize);

Object.keys(db).forEach(modelName=>{
  if(db[modelName].associate){
    db[modelName].associate(db);
  }
});






db.User.sync({ force: false });
db.Post.sync({ force: false });
db.Hashtag.sync({ force: false });



db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
