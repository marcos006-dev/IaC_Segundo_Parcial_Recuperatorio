import { connect } from 'mongoose';
import mysql from 'mysql2/promise';
import mariadb from 'mariadb';

export const createMysqlConnection = () => {
  return mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: 3306,
  });
};
export const createMariadbConnection = () => {
  const mariadbPool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    port: 3306,
  });

  return mariadbPool.getConnection();
};

export const createMongoConnection = () => {
  return connect(`mongodb://${process.env.MONGODB_HOST}:27017`);
};
