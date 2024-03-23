export default class CartPage {
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
        cy.contains('.cart_quantity', productQty)
    }

    clickRemoveButton() {
        cy.contains('button[class="btn_secondary cart_button"]', 'REMOVE').click()
    }

    clickContShopButton() {
        cy.contains('.btn_secondary', 'Continue Shopping').click()
    }

    clickCheckoutButton() {
        cy.contains('.btn_action.checkout_button', 'CHECKOUT').click()
    }
}