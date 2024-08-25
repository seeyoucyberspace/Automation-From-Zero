import ContractPagePO from '../page_objects/contract_page_objects.js';

export default class ContractPageSteps {
    constructor(driver) {
        this.driver = driver;
        this.contractPageObject = new ContractPagePO(driver);
    }

    async clickAddressButton() {
        await this.contractPageObject.addAddressButton.click();
        await this.driver.sleep(5000);
        return this
    }

    async setRandomWalletAddress() {
        await this.driver.sleep(5000);
        const hexCharacters = '0123456789abcdef';
        let walletAddress = '0x';

        for (let i = 0; i < 40; i++) {
            walletAddress += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
        }

        await this.contractPageObject.contactOrValetAddressInput.sendKeys(walletAddress);
        return this
    }

    async clickRandomDropdownElement() {
        await this.contractPageObject.networkDropdown.click();
        await this.driver.sleep(3000);

        const dropdownItems = await this.contractPageObject.networkDropdownElements;

        if (dropdownItems.length > 0) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * dropdownItems.length);
            } while (randomIndex === 5 && dropdownItems.length > 1);

            await this.driver.sleep(3000);
            await dropdownItems[randomIndex].click();
        } else {
            console.log("Dropdown is empty or undefined");
        }

        return this;
    }

    async setRandomAddressName() {
        const words = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'juliet', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa', 'quebec', 'romeo', 'sierra', 'tango', 'uniform', 'victor', 'whiskey', 'x-ray', 'yankee', 'zulu'];
        await this.contractPageObject.addressNameInput.click();

        const firstWord = words[Math.floor(Math.random() * words.length)];
        const secondWord = words[Math.floor(Math.random() * words.length)];

        let randomName = `${firstWord} ${secondWord}`;
        await this.contractPageObject.addressNameInput.sendKeys(randomName)
        return randomName
    }

    async verifySuccessfulCreatedPopUp(value) {
        await this.contractPageObject.successfulCreatedPopUp.isDisplayed();
        await this.contractPageObject.checkContractByText(value).isDisplayed();
        return this
    }

    async verifySuccessfulPopUp(value) {
        await this.contractPageObject.successfulCreatedPopUp.isDisplayed();
        return this
    }

    async clickOnContract(value) {
        await this.contractPageObject.checkContractByText(value).click();
        await this.driver.sleep(1000);
        return this
    }

    async clickDoItLaterButton() {
        await this.contractPageObject.doItLaterButton.click();
        await this.driver.sleep(1000);
        return this
    }

    async clickAddressSettingButton() {
        await this.contractPageObject.addressSettingButton.click();
        await this.driver.sleep(1000);
        return this
    }

    async clickOnDeleteButton() {
        await this.contractPageObject.deleteButton.click();
        await this.driver.sleep(1000);
        return this
    }

    async clickOnDeleteAddressButton() {
        await this.contractPageObject.deleteAddressButton.click();
        await this.driver.sleep(1000);
        return this
    }

}
