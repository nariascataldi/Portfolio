const { User, conn } = require('../../src/db.js');
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
