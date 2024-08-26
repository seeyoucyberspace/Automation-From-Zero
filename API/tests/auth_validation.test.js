import {getTokensFromNetwork}  from '../utils/auth.js';
import axios from 'axios';
import { expect } from 'chai';
import { environment } from '../config/environment.js';

describe('API Authorization and Latency Validation', () => {
    let accessToken;

    beforeEach(async () => {
        const tokens = await getTokensFromNetwork();
        accessToken = tokens.accessToken;
    });

    it('Registered user should not access another user’s resources', async () => {
        try {
            const response = await axios.get(`${environment.apiBaseUrl}/contract/635/withAbi`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            expect.fail('Request should have been denied, but it was successful');
        } catch (error) {
            expect(error.response.status).to.equal(404);
            console.log('Access correctly denied with status:', error.response.status);
        }
    });

    it('Should check that API latency for /user/me is acceptable', async () => {
        const start = Date.now();

        const response = await axios.get(`${environment.apiBaseUrl}/user/me`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const end = Date.now();
        const latency = end - start;

        console.log(`Latency: ${latency}ms`);

        expect(latency).to.be.below(200);
        expect(response.status).to.equal(200);
    });
});
