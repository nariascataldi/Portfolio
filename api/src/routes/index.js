const { Router } = require('express');
const { User, Proyect, Mail } = require('../db');
const getUser = require('../utils/User/getUser');
const getProyects = require('../utils/Proyect/getProyect');
const getMails = require('../utils/Mail/getMail');
// const axios = require('axios');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req, res) => {
  try {
    res.send('Prueba de que todo irá bien 🙂')
  } catch (error) {
    console.log('api, error en la ruta get');
    next(error);
  }
})
//---- GET --------
router.get('/users', async (req, res, next) => {
  let usersAll = await getUser();
  try {
    usersAll.length ? 
      res.send(usersAll) :
      res.send('error al traer usuarios');
  } catch (error) {
    console.log('api, error en la ruta get user');
    next(error);
  }
});
router.get('/proyects', async (req, res, next) => {
  let proyectsAll = await getProyects();
  try {
    proyectsAll.length ? 
      res.send(proyectsAll) :
      res.send('error al traer los proyectos');
  } catch (error) {
    console.log('api, error en la ruta get proyect');
    next(error);
  }
});
router.get('/mails', async (req, res, next) => {
  let mailsAll = await getMails();
  try {
    mailsAll.length ? 
      res.send(mailsAll) :
      res.send('error al traer los mails');
  } catch (error) {
    console.log('api, error en la ruta get mail');
    next(error);
  }
})

//---- POST -------

//---- PUT --------

//---- DELETE -----


module.exports = router;
