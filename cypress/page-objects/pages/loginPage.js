export default class LoginPage {
    constructor() {
        //ทำก่อนที่จะเรียกใช้ function ใน class
    }

    inputUsername(username) {
        cy.get('#user-name').clear().type(username)
    }

    inputPassword(password) {
        cy.get('#password').clear().type(password)
    }

    clickLoginButton() {
        cy.get('#login-button').click()
    }

    errorLockAccountMessage(errorMessage) {
        cy.get('[data-test="error"]').should('have.text', errorMessage)
    }
}