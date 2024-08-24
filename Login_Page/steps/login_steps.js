import LoginPagePO from '../page_objects/login_page_objects.js';
import { expect } from 'chai';


export default class LoginPageSteps {
    constructor(driver) {
        this.driver = driver; // Убедитесь, что driver сохраняется здесь
        this.loginPageObject = new LoginPagePO(driver); // Передаем driver в LoginPagePO
    }

    async waitForPageLoad() {
        await this.driver.sleep(1000);

        await this.driver.wait(async () => {
            const readyState = await this.driver.executeScript('return document.readyState');
            return readyState === 'complete';
        }, 5000);
    }

    async clickOnGoogleLogin() {
        await this.loginPageObject.loginGoogleButton.click();
        await this.loginPageObject.emailFieldGoogleLogin.isDisplayed();
        return this
    }

    async setGoogleEmailValue(value) {
        await this.loginPageObject.emailFieldGoogleLogin.sendKeys(value);
        return this
    }

    async setGooglePassValue(value) {
        await this.loginPageObject.emailFieldGooglePass.sendKeys(value);
        return this
    }

    async verifyInvalidLoginError() {
        await this.loginPageObject.errorLoginMessage.isDisplayed();
        return this
    }

    async verifyInvalidPassError() {
        await this.loginPageObject.errorPassMessage.isDisplayed();
        return this
    }

    async clickNextButton() {
        await this.loginPageObject.nextButton.click();
        await this.driver.sleep(5000)
        return this
    }

    async verifyPage(value) {
        const currentUrl =  await this.driver.getCurrentUrl();
        expect(currentUrl).to.equal(value);
        return this
    }
}
