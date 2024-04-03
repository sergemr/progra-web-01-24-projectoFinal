const { Sequelize, Model, DataTypes } = require('sequelize');
 
require('dotenv').config();
 
const sequelize = new Sequelize(
  process.env.DATABASE_NAME, 
  process.env.DATABASE_USER, 
  process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  port: process.env.DATABASE_PORT || 3306 // Default to 3306 if DATABASE_PORT is not set
});
 
class Product extends Model {}
 
Product.init({
  product_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT(10, 2),
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_stock: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
}, {
  sequelize,
  modelName: 'Product'
});
 
sequelize.sync().then(() => {
  console.log('Database and tables created!');
}).catch((error) => {
  console.error('Unable to synchronize the database:', error);
});