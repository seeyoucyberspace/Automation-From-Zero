import { validUser, invalidUser, urls } from '../../Configs/login_config.js';
import { createDriver } from '../../config_prod.js';
import LoginPagePO from '../page_objects/login_page_objects.js';
import LoginPageSteps from '../steps/login_steps.js';

let driver;
let loginSteps;

describe('Login Page Test Suite', function() {

    beforeEach(async function() {
        driver = await createDriver();
        loginSteps = new LoginPageSteps(driver); // Передаем driver в LoginPageSteps

        await driver.get(urls.loginPage);
        await loginSteps.waitForPageLoad(); // Здесь вызывается waitForPageLoad
    });

    it('User should successfully log in with valid credentials, with Google method', async function() {
        await loginSteps.clickOnGoogleLogin();
        await loginSteps.setGoogleEmailValue(validUser.username);
        await loginSteps.clickNextButton();
        await loginSteps.setGooglePassValue(validUser.password);
        await loginSteps.clickNextButton();
        await loginSteps.verifyPage(urls.dashboardPage);
    });

    it('User should successfully log in with invalid email, with Google method', async function() {
        await loginSteps.clickOnGoogleLogin();
        await loginSteps.setGoogleEmailValue(invalidUser.username);
        await loginSteps.clickNextButton();
        await loginSteps.verifyInvalidLoginError();
    });

    it('User should successfully log in with invalid password, with Google method', async function() {
        await loginSteps.clickOnGoogleLogin();
        await loginSteps.setGoogleEmailValue(validUser.username);
        await loginSteps.clickNextButton();
        await loginSteps.setGooglePassValue(invalidUser.password);
        await loginSteps.clickNextButton();
        await loginSteps.verifyInvalidPassError();
    });

    afterEach(async function() {
        await driver.quit();
    });

});
