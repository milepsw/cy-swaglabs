export default class OverViewPage {
    constructor() {
        //ทำก่อนที่จะเรียกใช้ function ใน class
    }

    checkProductName(productName) {
        cy.contains('.inventory_item_name', productName)
    }

    checkProductDesc(productDesc) {
        cy.contains('.inventory_item_desc', productDesc)
    }

    checkProductPrice(productPrice) {
        cy.contains('.inventory_item_price', productPrice)
    }

    checkProductQty(productQty) {
        cy.contains('.summary_quantity', productQty)
    }

    checkProductSubTotal(subtotal) {
        cy.get('.summary_subtotal_label').should('contain.text', subtotal)
    }

    checkTax(tax) {
        cy.get('.summary_tax_label').should('contain.text', tax)
    }

    checkProductTotal(total) {
        cy.get('.summary_total_label').should('contain.text', total)
    }

    clickCancelButton() {
        cy.contains('.cart_cancel_link.btn_secondary', 'CANCEL').click()
    }

    clickFinishButton() {
        cy.contains('.btn_action.cart_button', 'FINISH').click()
    }
}