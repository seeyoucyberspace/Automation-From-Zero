import { By } from 'selenium-webdriver';

export default class ContractPagePO {
    constructor(driver) {
        this.driver = driver;
    }

    get addAddressButton() {
        return this.driver.findElement(By.css('[class = "ant-btn css-1yr0fga ant-btn-primary ant-btn-lg"]'));
    }

    get contactOrValetAddressInput() {
        return this.driver.findElement(By.css('[placeholder = "Enter an address"]'));
    }

    get networkDropdown() {
        return this.driver.findElement(By.id('chainUid'));
    }

    get networkDropdownElements() {
        return this.driver.findElements(By.css('[class = "rc-virtual-list-holder-inner"] > div[title]'));
    }


    get addressNameInput() {
        return this.driver.findElement(By.id('name'));
    }

    get successfulCreatedPopUp() {
        return this.driver.findElement(By.css('[class = "ant-notification-notice ant-notification-notice-success ant-notification-notice-closable"]'));
    }

    checkContractByText(value) {
        return this.driver.findElement(By.xpath(`//div[contains(text(), "${value}")]`));
    }

    get doItLaterButton() {
        return this.driver.findElement(By.css(`[class = "ant-btn css-1yr0fga ant-btn-text"]`));
    }

    get addressSettingButton() {
        return this.driver.findElement(By.xpath(`//button//span[contains(text(), 'Address Setting')]`));
    }

    get deleteButton() {
        return this.driver.findElement(By.css(`[class = "ant-btn css-1yr0fga ant-btn-text ant-btn-lg ant-btn-dangerous"]`));
    }

    get deleteAddressButton() {
        return this.driver.findElement(By.css(`[class ="ant-modal-footer"] > button[class ="ant-btn css-1yr0fga ant-btn-primary ant-btn-lg ant-btn-dangerous"]`));
    }


}
