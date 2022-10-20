const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const pushMail = require('./src/utils/preload/pushMail');
const pushUser = require('./src/utils/preload/pushUser');
const pushProyect = require('./src/utils/preload/pushProyect');

const PORT = 3001;
// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  pushUser();
  pushMail();
  pushProyect();

  server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`); // eslint-disable-line no-console
  });
});
