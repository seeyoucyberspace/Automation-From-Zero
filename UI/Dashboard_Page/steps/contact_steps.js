import ContractPagePO from '../page_objects/contract_page_objects.js';
import { expect } from 'chai';


export default class ContractPageSteps {
    constructor(driver) {
        this.driver = driver; // Убедитесь, что driver сохраняется здесь
        this.contractPageObject = new ContractPagePO(driver); // Передаем driver в LoginPagePO
    }

    async clickAddressButton() {
        await this.contractPageObject.addAddressButton.click();
        return this
    }


}
