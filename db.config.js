const { Sequelize, DataTypes } = require("sequelize");

const sequelize =  new Sequelize(
'pos_map_db',
 'root',
'Le47492156@',
{
  dialect : 'mysql',
  'host' : 'localhost'
}
);


module.exports = sequelize;
