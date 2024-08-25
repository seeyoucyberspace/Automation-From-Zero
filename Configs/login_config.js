// login_config.js

export const validUser = {
    username: 'oonlyfortestproject@gmail.com',
    password: 'passOnlyForTestProject!2'
};

export const invalidUser = {
    username: 'notReallyUser123132123@gmail.com',
    password: 'notReallyPass!212321312313'
};

export const urls = {
    loginPage: 'https://auth.extractor.live/realms/hacken/protocol/openid-connect/auth?client_id=extractor-public&redirect_uri=https%3A%2F%2Fapp.extractor.live%2F&state=2488f65a-cb6f-41a7-81d5-c18fc4ff9721&response_mode=fragment&response_type=code&scope=openid&nonce=47456c20-8477-4356-857c-63f37c072dc8',
    // emailPage: '';
    dashboardPage: 'https://app.extractor.live/',
    contractPage: 'https://app.extractor.live/contract/create',
};
