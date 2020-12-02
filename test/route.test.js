const request = require('supertest');
const app = require('../src/app');

test('route /anything return 404html page', (done) => {
  request(app)
    .get('/hi')
    .expect(404)
    .end((err, res) => {
      if (err) return done(err);
      // eslint-disable-next-line no-console
      console.log(res.body);
      done();
    });
});

test('route /weather return gaza weather page', (done) => {
    request(app)
      .get('/weather')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        // eslint-disable-next-line no-console
       expect(res.body.name).toBe("Gaza")
        done();
      });
  });
