const app = require('../index.js');
const { User, sequelize } = require('../models');
const request = require('supertest');
const { queryInterface } = sequelize;

describe('User route Test', () => {
  const userData = {
    user_name: 'fuzail',
    email: 'fuzail@mail.com',
    password: 'rahasia'
  }
  const userData2 = {
    user_name: 'foeza',
    email: 'foeza@mail.com',
    password: 'hahaha'
  }

  describe('POST /register', () => {
    beforeAll(done => {
      User.create(userData2)
        .then(() => done())
        .catch(err => done(err))
    })

    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => done())
        .catch(err => done(err))
    })

    test('201 Success register', done => {
      request(app)
        .post('/register')
        .send(userData)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(201);
          expect(body).toHaveProperty('access_token', expect.any(String))
          done()
        })
    })

    test('400 Failed register - error if username is empty', done => {
      request(app)
        .post('/register')
        .send({
          user_name: '',
          email: 'user@mail.com',
          password: 'rahasia'
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty('message', 'Username cannot be empty')
          done()
        })
    })

    test('400 Failed register - error if email is invalid', done => {
      request(app)
        .post('/register')
        .send({
          user_name: 'user',
          email: 'bukanemail',
          password: 'rahasia'
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty('message', 'Invalid email')
          done()
        })
    })

    test('400 Failed register - error if password is invalid', done => {
      request(app)
        .post('/register')
        .send({
          user_name: 'username',
          email: 'email@mail.com',
          password: 'as'
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400);
          expect(body).toHaveProperty('message', 'Password should be more than 5 character')
          done()
        })
    })
  })

  describe('POST /login', () => {
    beforeAll(done => {
      User.create(userData)
        .then(() => done())
        .catch(err => done(err))
    })
    afterAll(done => {
      queryInterface
        .bulkDelete('Users', {})
        .then(() => done())
        .catch(err => done(err))
    })

    test('200 success login', done => {
      request(app)
        .post('/login')
        .send(userData)
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(200)
          expect(body).toHaveProperty('access_token', expect.any(String))
          done()
        })
    })

    test('400 failed login', done => {
      request(app)
        .post('/login')
        .send({
          email: 'fuzail@mail.com',
          password: 'wrongpass'
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(400)
          expect(body).toHaveProperty('message', 'Wrong password')
          done()
        })
    })

    test('404 failed login', done => {
      request(app)
        .post('/login')
        .send({
          email: 'random@mail.com',
          password: 'rahasia'
        })
        .then(response => {
          const { body, status } = response;
          expect(status).toBe(404)
          expect(body).toHaveProperty('message', 'Email not found')
          done()
        })
    })
  })
},30000)