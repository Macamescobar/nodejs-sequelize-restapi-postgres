import Sequelize from 'sequelize'

export const sequelize = new Sequelize('mydb', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});



