import { validUser, invalidUser, urls } from '../../../Configs/login_config.js';
import { createDriver } from '../../../config_prod.js';
import ContractPageSteps from '../steps/contract_steps.js';
import LoginPageSteps from "../../Login_Page/steps/login_steps.js";

let driver;
let contractSteps;
let loginSteps;

describe('Dashboard Page Test Suite', function() {

    beforeEach(async function() {
        driver = await createDriver();
        contractSteps = new ContractPageSteps(driver);
        loginSteps = new LoginPageSteps(driver);

        await driver.get(urls.loginPage);
        await loginSteps.waitForPageLoad();

        await loginSteps.clickOnGoogleLogin();
        await loginSteps.setGoogleEmailValue(validUser.username);
        await loginSteps.clickNextButton();
        await loginSteps.setGooglePassValue(validUser.password);
        await loginSteps.clickNextButton();
        await loginSteps.verifyPage(urls.contractPage);
    });

    it.only('User should successfully log in and create new contract, verify and delete it', async function() {
        await contractSteps.setRandomWalletAddress();
        await contractSteps.clickRandomDropdownElement();
        let addressName = await contractSteps.setRandomAddressName();
        await contractSteps.clickAddressButton();
        await contractSteps.verifySuccessfulCreatedPopUp(addressName);

        await contractSteps.clickOnContract(addressName);
        await contractSteps.clickDoItLaterButton();
        await contractSteps.clickAddressSettingButton();
        await contractSteps.clickOnDeleteButton();
        await contractSteps.clickOnDeleteAddressButton();
        await contractSteps.verifySuccessfulPopUp();
    });



    afterEach(async function() {
        await driver.quit();
    });

});
