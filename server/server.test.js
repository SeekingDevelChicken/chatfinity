/*
Testing instructions: Server has to run for this test to work.
This is a super test suite
*/

const request = require('supertest');

const server = 'http://localhost:3000';


// Basic Navigation
describe('Server level test', () => {

  describe('Homepage test', () => {
    it('returns the index file when we first hit the endpoint', () => {
      return request(server)
      .get('/')
      .expect(200)
      .expect('Content-Type', /text\/html/)
    })
  })

  describe('Errant endpoint request handling', () => {
    it('should return an error for an unspecified endpoint request', () => {
      return request(server)
        .get('/testwrong')
        .expect(404)
    })
  })
})



//Posts
describe('/Posts endpoint route & controller testing', () => {

  describe('loading all posts for initial feed display', () => {
    it('should return a not empty body', () => {
      return request(server)
        .get('/posts/')
        .expect(200)
        .expect((res) => {
          return res.body !== null;
        })
    })
  })

  describe('creating posts for the board', () => {
    const testPost = {
      user_id: 1234,
      title: "testing",
      body: "testingBody"
    }
    it('should create a post with the given inputs', () => {
      return request(server)
        .post('/posts/')
        .send(testPost)
        .expect(test)
    })
  })
})



//User Authentication
describe('/auth endpoint route and controller testing', () => {
  const user = {
    username: 'Ziyadtests',
    password: 'ZiyadtestsPWD'
  }

  describe('create a new user', () => {
    it('should create a new user', () => {
      return request(server)
        .post('/auth/signup')
        .send(user)
        .expect(200)
    })
    it('should return an error if a field is missing', () => {
      return request(server)
        .post('/auth/signup')
        .send({ username: 'Ziyad' })
        .expect(401)
    })
  })
})
