const server = require('./src/app.js');
const { conn, User, Mail, Proyect } = require('./src/db.js');
const port = process.env.PORT || 3001;

const jsonUser = require('./src/utils/Data/user.json');
const jsonMail = require('./src/utils/Data/mail.json');
const jsonProyect = require('./src/utils/Data/proyect.json');
const pushUser = () => {
  try {
    jsonUser.users.forEach(obj => {
      User.create(obj)
    })
    console.log('Usuarios cargados');
  } catch (error) {
    console.log('No se cargaron los usuarios')
  }
}
const pushMail = () => {
  try {
    jsonMail.mails.forEach(obj => {
      Mail.create(obj)
    })
    console.log('Mails cargados');
  } catch (error) {
    console.log('No se cargaron los mails')
  }
}
const pushProyect = () => {
  try {
    jsonProyect.proyects.forEach(obj => {
      Proyect.create(obj)
    })
    console.log('Proyectos cargados');
  } catch (error) {
    console.log('No se cargaron los proyectos')
  }
}


// Syncing all the models at once.
(async () => {

  await conn.sync({ force: true }).then(() => {
    pushUser();
    pushMail();
    pushProyect();

    server.listen(port, () => {
      console.log(`Listening at ${port} `); // eslint-disable-line no-console
    });
  })
})();