import { By } from 'selenium-webdriver';

export default class LoginPagePO {
    constructor(driver) {
        this.driver = driver;
    }

    get loginGoogleButton() {
        return this.driver.findElement(By.id('zocial-google'));
    }

    get emailFieldGoogleLogin() {
        return this.driver.findElement(By.css('[type = "email"]'));
    }

    get emailFieldGooglePass() {
        return this.driver.findElement(By.css('[type = "password"]'));
    }

    get nextButton() {
        return this.driver.findElement(By.css('[type = "button"][class = "VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe DuMIQc LQeN7 BqKGqe Jskylb TrZEUc lw1w4b"]'));
    }

    get errorLoginMessage() {
        return this.driver.findElement(By.css('[class= "Ekjuhf Jj6Lae"]'));
    }

    get errorPassMessage() {
        return this.driver.findElement(By.css('[class = "Ly8vae uSvLId"]'));
    }

}
