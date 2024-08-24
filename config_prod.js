// config/seleniumConfig.js
import { Builder } from 'selenium-webdriver';

export async function createDriver() {
    let driver = await new Builder().forBrowser('chrome').build();
    return driver;
}
