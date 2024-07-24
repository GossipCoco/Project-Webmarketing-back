const { DataTypes } = require('sequelize');
const connection = require('../DataLayer/connection');
const functions = require('./Function')
const Questions = connection.define(
    "Questions",
    {
        Id:{
            type: DataTypes.STRING,
            primaryKey: true,
          },
          Question: {
            type: DataTypes.STRING,
          },
          Category: {
            type: DataTypes.STRING,
          },
          createdAt:{
            type: 'DATETIME',
            defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
          },
          updatedAt:{
            type: 'DATETIME',
            defaultValue: new Date(functions.toDateTime(Date.now())).toISOString()
          },
    },
    { freezeTableName: true, timestamps: false }
)
module.exports = Questions