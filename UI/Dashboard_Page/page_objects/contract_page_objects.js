import { By } from 'selenium-webdriver';

export default class ContractPagePO {
    constructor(driver) {
        this.driver = driver;
    }

    get addAddressButton() {
        return this.driver.findElement(By.css('[class = "ant-btn css-1yr0fga ant-btn-primary ant-btn-lg"]'));
    }


}
