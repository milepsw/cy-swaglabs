export default class FinishPage {
    constructor() {
        //ทำก่อนที่จะเรียกใช้ function ใน class
    }

    checkPaymentSuccessHeader() {
        cy.contains('.complete-header', 'THANK YOU FOR YOUR ORDER')
    }

    checkPaymentSuccessDesc() {
        cy.contains('.complete-text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    }

    checkPaymentSuccessImg() {
        cy.get('.pony_express').should('be.visible')
    }
}