import { validUser, invalidUser, urls } from '../../Configs/login_config.js';
import { createDriver } from '../../config_prod.js';
import { LoginPageSteps } from '../steps/login_steps.js';

describe('Login Page Test Suite', function() {
    let driver;

    before(async function() {
        driver = await createDriver();
    });

    beforeEach(async function() {
        await driver.get(urls.loginPage);
    });

    it('User should successfully log in with valid credentials, with Google method', async function() {
        await performLogin(driver, validUser.username, validUser.password);

        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.equal(urls.dashboardPage);
    });

    it('should fail to log in with invalid credentials', async function() {
        await driver.get(urls.loginPage);
        await performLogin(driver, invalidUser.username, invalidUser.password);

        // Добавьте проверки для сценария неудачного логина
    });

    after(async function() {
        await driver.quit();
    });
});
