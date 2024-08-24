// login_page_objects.js
import { By } from 'selenium-webdriver';

export default class LoginPagePO {
    constructor(driver) {
        this.driver = driver;
    }

    // Локатор для поля ввода логина
    get usernameInput() {
        return this.driver.findElement(By.id('username'));
    }

    // Локатор для поля ввода пароля
    get passwordInput() {
        return this.driver.findElement(By.id('password'));
    }

    // Локатор для кнопки входа
    get loginButton() {
        return this.driver.findElement(By.id('login-button'));
    }

    // Метод для ввода логина
    async enterUsername(username) {
        const input = await this.usernameInput;
        await input.sendKeys(username);
    }

    // Метод для ввода пароля
    async enterPassword(password) {
        const input = await this.passwordInput;
        await input.sendKeys(password);
    }

    // Метод для клика по кнопке входа
    async clickLoginButton() {
        const button = await this.loginButton;
        await button.click();
    }
}


