const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
    it('should GET plain text hi', async () => {
        const res = await request(app)
            .get('/');

        expect(res.text).toEqual('hi');
    });

    it('should POST status code 200 and plain text with the request body', async () => {
        const res = await request(app)
            .post('/echo')
            .send('hi');

        expect(res.text).toEqual('hi');
    });

    it('should return html with the word red', async () => {
        const res = await request(app)
            .get('/red');

        expect(res.text).toEqual('<h1>red</h1>');
    });

    it('should return html with the word green', async () => {
        const res = await request(app)
            .get('/green');

        expect(res.text).toEqual('<h1>green</h1>');
    });

    it('should return html with the word blue', async () => {
        const res = await request(app)
            .get('/blue');

        expect(res.text).toEqual('<h1>blue</h1>');
    });

    it('should return a 404 and not found status if a bad path', async () => {
        const res = await request(app)
            .get('/whatever')
            .send({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' });

        expect(res.text).toEqual('Not Found');
    });
});

