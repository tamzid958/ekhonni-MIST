import IndividualProductPage from "./IndividualProductPage"

class ProductPage{
    clickDetailsButton(){
        cy.get('button[type="Submit"]').eq(1).click()
        const individualProductPage = new IndividualProductPage()
        return individualProductPage
    }
}
export default ProductPage