import { Builder } from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome.js'; // Добавляем ".js" к пути

export async function createDriver() {
    const options = new chrome.Options();
    options.addArguments('--window-size=1920,1080');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options) // Добавляем опции Chrome
        .build();

    return driver;
}
