const { User, Mail, Proyect, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('User model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => User.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        User.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        User.create({ name: 'Néstor' });
      });
    });
    describe('lastName', () => {
      it('should throw an error if lastName is not string', (done) => {
        User.create({ lastName: true })
          .then(() => done(new Error('It requires a valid name of lastName')))
          .catch(() => done());
      });
      it('should work when its a valid lastName', () => {
        User.create({ lastName: 'Arias Cataldi' });
      });
    });
    describe('status', () => {
      it('should throw an error if status is not number', (done) => {
        User.create({ status: 'a' })
          .then(() => done(new Error('It requires a valid status')))
          .catch(() => done());
      });
      it('should work when its a valid status', () => {
        User.create({ status: 1 });
      });
    });
    describe('isActive', () => {
      it('should throw an error if isActive is not boolean', (done) => {
        User.create({ status: 'verdadero' })
          .then(() => done(new Error('It requires a valid isActive')))
          .catch(() => done());
      });
      it('should work when its a valid isActive', () => {
        User.create({ isActive: true });
      });
    });
    describe('company', () => {
      it('should throw an error if company is not string', (done) => {
        User.create({ company: true })
          .then(() => done(new Error('It requires a valid name of company')))
          .catch(() => done());
      });
      it('should work when its a valid name of company', () => {
        User.create({ company: 'Lib. San Felipe' });
      });
    });
  });
});
describe('Mail model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Mail.sync({ force: true }));
    describe('mail', () => {
      it('should throw an error if mail is null', (done) => {
        Mail.create({})
          .then(() => done(new Error('It requires a valid mail')))
          .catch(() => done());
      });
      it('should work when its a valid mail', () => {
        Mail.create({ name: 'nestorariascataldi@gmail.com' });
      });
    });
    describe('pass', () => {
      it('should throw an error if pass is not string', (done) => {
        Mail.create({ pass: 2 })
          .then(() => done(new Error('It requires a valid pass')))
          .catch(() => done());
      });
      it('should work when its a valid pass', () => {
        Mail.create({ pass: '12345678' });
      });
    });
    describe('pass', () => {
      it('should throw an error if pass is not string', (done) => {
        Mail.create({ pass: 2 })
          .then(() => done(new Error('It requires a valid pass')))
          .catch(() => done());
      });
      it('should work when its a valid pass', () => {
        Mail.create({ pass: '12345678' });
      });
    });
    describe('image', () => {
      it('should throw an error if image is not an url', (done) => {
        Mail.create({ image: true })
          .then(() => done(new Error('It requires a valid image url')))
          .catch(() => done());
      });
      it('should work when its a valid image url', () => {
        Mail.create({ image: 'https://foo.com' });
      });
    });
    describe('picture', () => {
      it('should throw an error if picture is not an url', (done) => {
        Mail.create({ picture: "hola" })
          .then(() => done(new Error('It requires a valid picture url')))
          .catch(() => done());
      });
      it('should work when its a valid picture url', () => {
        Mail.create({ picture: 'https://foo.com' });
      });
    });

  });
});
describe('Proyect model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Proyect.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Proyect.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Proyect.create({ name: 'PI-FOOD' });
      });
    });
    describe('date', () => {
      it('should throw an error if date is null', (done) => {
        Proyect.create({ date: true })
          .then(() => done(new Error('It requires a valid date')))
          .catch(() => done());
      });
      it('should work when its a valid date', () => {
        Proyect.create({ date: '04/08/1983' });
      });
    });
    describe('isActive', () => {
      it('should throw an error if isActive is null', (done) => {
        Proyect.create({ isActive: 'true' })
          .then(() => done(new Error('It requires a valid isActive')))
          .catch(() => done());
      });
      it('should work when its a valid isActive', () => {
        Proyect.create({ isActive: true });
      });
    });
    describe('deploy', () => {
      it('should throw an error if deploy is null', (done) => {
        Proyect.create({ deploy: 'true' })
          .then(() => done(new Error('It requires a valid deploy')))
          .catch(() => done());
      });
      it('should work when its a valid deploy', () => {
        Proyect.create({ deploy: true });
      });
    });
    describe('url', () => {
      it('should throw an error if url is null', (done) => {
        Proyect.create({ url: true })
          .then(() => done(new Error('It requires a valid url')))
          .catch(() => done());
      });
      it('should work when its a valid url', () => {
        Proyect.create({ url: 'https://true.com' });
      });
    });
    describe('video', () => {
      it('should throw an error if video is null', (done) => {
        Proyect.create({ video: true })
          .then(() => done(new Error('It requires a valid video')))
          .catch(() => done());
      });
      it('should work when its a valid video', () => {
        Proyect.create({ video: 'https://true.com' });
      });
    });
    describe('image', () => {
      it('should throw an error if image is null', (done) => {
        Proyect.create({ image: true })
          .then(() => done(new Error('It requires a valid image')))
          .catch(() => done());
      });
      it('should work when its a valid image', () => {
        Proyect.create({ image: 'https://true.com' });
      });
    });
    describe('autor', () => {
      it('should throw an error if autor is null', (done) => {
        Proyect.create({ autor: true })
          .then(() => done(new Error('It requires a valid autor')))
          .catch(() => done());
      });
      it('should work when its a valid autor', () => {
        Proyect.create({ autor: ['Néstor', 'Jonhatan', 'Carlos'] });
      });
    });

  });
});