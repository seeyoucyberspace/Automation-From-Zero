const { allure } = require('allure-mocha/runtime');

exports.mochaHooks = {
    beforeEach() {
        const testTitle = this.currentTest.title;
        const suiteTitle = this.currentTest.parent.title;

        allure.feature(suiteTitle);
        allure.story(testTitle);
    }
};
