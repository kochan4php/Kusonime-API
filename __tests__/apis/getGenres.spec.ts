import supertest from 'supertest';
import app from '../../__mocks__/app';

describe('Test /api/genres endpoint', () => {
    it('should return 200 OK and success get anime genres', async () => {
        const result = await supertest(app).get('/api/genres');

        expect(result.status).not.toBe(500);
        expect(result.status).toBe(200);
        expect(result.body).toHaveProperty('success', true);
        expect(result.body).toHaveProperty('data');
        expect(result.body.data).toBeInstanceOf(Array);
    });
});
