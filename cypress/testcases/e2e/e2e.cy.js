import { 
    // Env
    baseUrl, 
    // Page
    common, loginPage, productsPage, productDetailPage, cartPage, yourInfoPage, overviewPage, finishPage, 
    // Data test
    loginData, productsData
} from '../../support/imports.js';

// Testcases
describe('E2E Testcase', () => {
    beforeEach(() => {
        cy.visit(baseUrl)
        loginPage.inputUsername(loginData.valid.user)
        loginPage.inputPassword(loginData.valid.pass)
        loginPage.clickLoginButton()
        productsPage.checkProductHeaderVisible()
    })
    
    it('TC001_Verify user can buy products success', () => {
        productsPage.clickProductName(productsData[1].name)
        productDetailPage.checkProductName(productsData[1].name)
        productDetailPage.checkProductDesc(productsData[1].desc)
        productDetailPage.checkProductPrice(productsData[1].price)
        productDetailPage.clickAddToCartButton()
        common.checkQuantityOnCartButton('1')
        common.clickCartButton()
        cartPage.checkProductName(productsData[1].name)
        cartPage.checkProductDesc(productsData[1].desc)
        cartPage.checkProductPrice(productsData[1].price)
        cartPage.checkProductQty('1')
        cartPage.clickCheckoutButton()
        yourInfoPage.inputFirstname('test')
        yourInfoPage.inputLastname('forever')
        yourInfoPage.inputPostalCode('12345')
        yourInfoPage.clickContinueButton()
        overviewPage.checkProductName(productsData[1].name)
        overviewPage.checkProductDesc(productsData[1].desc)
        overviewPage.checkProductPrice(productsData[1].price)
        overviewPage.checkProductQty('1')
        overviewPage.checkProductSubTotal(productsData[1].price)
        overviewPage.checkTax('2.40')
        overviewPage.checkProductTotal('32.39')
        overviewPage.clickFinishButton()
        finishPage.checkPaymentSuccessHeader()
        finishPage.checkPaymentSuccessDesc()
        finishPage.checkPaymentSuccessImg()
    })
})