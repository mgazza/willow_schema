'use strict';

const Sequelize = require('sequelize');

const databaseName = process.env.DATABASE_NAME || 'demo2';
const databaseHost = process.env.DATABASE_HOST || 'localhost';
const databasePort = process.env.DATABASE_PORT || 5432
const databaseUser = process.env.DATABASE_USER || 'syedasultana';
const databasePassword = process.env.DATABASE_PASSWORD || '';
//const databaseUseSsl = process.env.DATABASE_USE_SSL !== 'false';
const databaseUseSsl = process.env.DATABASE_USE_SSL || 'false';

var opts = {
    host: databaseHost,
    port: databasePort,
    ssl: false,
    dialect: 'postgres',
    define: {
        freezeTableName: true,
        timestamps: false,
        underscored: true,
    }
};

const conn = new Sequelize(databaseName, databaseUser, databasePassword, opts);

module.exports = {
    conn: conn,
    Sequelize: Sequelize,
};
