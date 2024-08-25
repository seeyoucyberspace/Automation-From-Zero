import { chromium } from 'playwright';
import { urls, validUser } from '../../Configs/login_config.js';

export async function getTokensFromNetwork() {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    let accessToken, refreshToken;

    page.on('response', async (response) => {
        const url = response.url();

        if (url.includes('token')) {
            try {
                const jsonResponse = await response.json();
                if (jsonResponse.access_token) {
                    accessToken = jsonResponse.access_token;
                    refreshToken = jsonResponse.refresh_token;
                }
            } catch (error) {
                console.error(error);
            }
        }
    });

    try {
        await page.goto(urls.loginPage, { waitUntil: 'networkidle' });

        await page.click('#zocial-google');
        await page.fill('[type="email"]', validUser.username);
        await page.click('[type="button"][class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b"]');

        await page.waitForTimeout(5000);

        await page.fill('[type="password"]', validUser.password);
        await page.click('[type="button"][class="VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b"]');

        await page.waitForTimeout(5000);

        if (!accessToken) {
            console.error('Tokens is undefined.');
        }

        return { accessToken, refreshToken };
    } finally {
        await browser.close();
    }
}
