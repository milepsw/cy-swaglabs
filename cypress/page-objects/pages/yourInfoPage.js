export default class YourInfoPage {
    constructor() {
        //ทำก่อนที่จะเรียกใช้ function ใน class
    }

    inputFirstname(firstname) {
        cy.get('#first-name').clear().type(firstname)
    }

    inputLastname(lastname) {
        cy.get('#last-name').clear().type(lastname)
    }

    inputPostalCode(zipcode) {
        cy.get('#postal-code').clear().type(zipcode)
    }

    clickCancelButton() {
        cy.contains('.cart_cancel_link.btn_secondary', 'CANCEL').click()
    }

    clickContinueButton() {
        cy.get('.btn_primary.cart_button[value="CONTINUE"]').click()
    }
}