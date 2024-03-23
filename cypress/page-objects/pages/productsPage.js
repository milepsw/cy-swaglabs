export default class ProductsPage {
    constructor() {
        //ทำก่อนที่จะเรียกใช้ function ใน class
    }

    checkProductHeaderVisible() {
        cy.contains('.product_label', 'Products')
    }

    checkProductName(productName) {
        cy.contains('.inventory_item_name', productName)
    }

    clickProductName(productName) {
        cy.contains('[href*="./inventory-item"] div', productName).click()
    }

    checkProductDesc(productDesc) {
        cy.contains('.inventory_item_desc', productDesc)
    }

    checkProductPrice(productPrice) {
        cy.contains('.inventory_item_price', productPrice)
    }
}