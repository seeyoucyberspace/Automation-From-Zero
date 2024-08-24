import { validUser, invalidUser, urls } from '../../../Configs/login_config.js';
import { createDriver } from '../../../config_prod.js';
import ContractPageSteps from '../steps/contact_steps.js';

let driver;
let contractSteps;

describe('Login Page Test Suite', function() {

    beforeEach(async function() {
        driver = await createDriver();
        contractSteps = new ContractPageSteps(driver); // Передаем driver в LoginPageSteps

        await driver.get(urls.loginPage);
        await loginSteps.waitForPageLoad(); // Здесь вызывается waitForPageLoad

        await loginSteps.clickOnGoogleLogin();
        await loginSteps.setGoogleEmailValue(validUser.username);
        await loginSteps.clickNextButton();
        await loginSteps.setGooglePassValue(validUser.password);
        await loginSteps.clickNextButton();
        await loginSteps.verifyPage(urls.dashboardPage);
    });

    it('User should successfully log in with valid credentials, with Google method', async function() {
        await contractSteps.clickAddressButton();

    });



    afterEach(async function() {
        await driver.quit();
    });

});
