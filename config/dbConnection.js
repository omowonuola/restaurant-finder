import { Sequelize } from 'sequelize';
import { config } from 'dotenv';

config();

// Option 1: Passing a connection URI
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DBHOST,
    dialect: 'postgres',
    logging: false,
});

const connectDB = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default connectDB;