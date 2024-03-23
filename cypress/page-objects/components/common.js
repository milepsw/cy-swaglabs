class Common {
    constructor() {
        //ทำก่อนที่จะเรียกใช้ function ใน class
    }

    checkCartButtonBeforeAddProduct() {
        cy.get('span[class="fa-layers-counter shopping_cart_badge"]').should(not.be.visible)
    }

    checkQuantityOnCartButton(productQty) {
        cy.contains('#shopping_cart_container a span', productQty)
    }

    clickCartButton() {
        cy.get('#shopping_cart_container a').click()
    }
}

export default Common