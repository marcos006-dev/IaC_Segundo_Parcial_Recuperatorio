import express from 'express';
import {
  createMariadbConnection,
  createMongoConnection,
  createMysqlConnection,
} from './connections/connectionsDb.js';

const app = express();

// Endpoint para probar la conexión con MongoDB
app.get('/mongodb', async (_req, res) => {
  try {
    await createMongoConnection();
    return res.send({
      msg: 'Conectado Correctamente a MongoDB',
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: 'Error de Conexion a MongoDB',
    });
  }
});

// Endpoint para probar la conexión con MYSQL
app.get('/mysql', async (req, res) => {
  try {
    await createMysqlConnection();
    return res.send({
      msg: 'Conectado Correctamente a MYSQL',
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: 'Error de Conexion a MYSQL',
    });
  }
});

// Endpoint para probar la conexión con MariaDB
app.get('/mariadb', async (req, res) => {
  try {
    await createMariadbConnection();
    return res.send({
      msg: 'Conectado Correctamente a MariaDB',
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: 'Error de Conexion a MariaDB',
    });
  }
});

app.listen(4000, () => {
  console.log('server running');
});
