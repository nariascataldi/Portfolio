/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { User, Mail, Proyect, conn } = require('../../src/db.js');

const agent = session(app);
const user = {
  name: 'Néstor',
  lastName: 'Arias Cataldi',
  status: 1,
  isActive: true,
  company: 'none'
};
const mail = {
  "mail": "nestorariascataldi@gmail.com",
  "pass": "30221985NAC",
  "image": "",
  "picture": ""
};
const proyect = {
  "name": "PI-Food",
  "date": "08/2022",
  "isActive": true,
  "deploy": true,
  "url":"https://pi-food-main-pi.vercel.app/",
  "image":"",
  "video":"",
  "autor": ["Néstor"]
};


describe('Users routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => User.sync({ force: true })
    .then(() => User.create(user)));
  describe('GET /users', () => {
    it('should get 200', () =>
      agent.get('/users').expect(200)
    );
  });
});
describe('Mails routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Mail.sync({ force: true })
    .then(() => Mail.create(mail)));
  describe('GET /mails', () => {
    it('should get 200', () =>
      agent.get('/mails').expect(200)
    );
  });
});
describe('Proyects routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Proyect.sync({ force: true })
    .then(() => Proyect.create(proyect)));
  describe('GET /proyects', () => {
    it('should get 200', () =>
      agent.get('/proyects').expect(200)
    );
  });
});