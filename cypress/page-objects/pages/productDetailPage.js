export default class ProductsDetailPage {
    constructor() {
        //ทำก่อนที่จะเรียกใช้ function ใน class
    }

    checkProductName(productName) {
        cy.contains('.inventory_details_name', productName)
    }

    checkProductDesc(productDesc) {
        cy.contains('.inventory_details_desc', productDesc)
    }

    checkProductPrice(productPrice) {
        cy.get('.inventory_details_price').should('contain.text', productPrice)
    }

    clickAddToCartButton() {
        cy.contains('button[class="btn_primary btn_inventory"]', 'ADD TO CART').click()
    }

    clickRemoveButton() {
        cy.contains('button[class="btn_secondary btn_inventory"]', 'REMOVE').click()
    }

    clickBackToInventoryButton() {
        cy.get('.inventory_details_back_button').click({force: true})
    }
}