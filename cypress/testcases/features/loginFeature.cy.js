import { 
    // Env
    baseUrl, 
    // Page
    loginPage, productsPage,
    // Data test
    loginData 
} from '../../support/imports.js';

// Testcases
describe('loginFeature', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
    })
    
    it('TC001_Login success', () => {
        loginPage.inputUsername(loginData.valid.user)
        loginPage.inputPassword(loginData.valid.pass)
        loginPage.clickLoginButton()
        productsPage.checkProductHeaderVisible()

    })

    it('TC002_Login fail with  lock out user', () => {
        loginPage.inputUsername(loginData.lock.user)
        loginPage.inputPassword(loginData.lock.pass)
        loginPage.clickLoginButton()
        loginPage.errorLockAccountMessage(loginData.lock.errorMess)
    })
})