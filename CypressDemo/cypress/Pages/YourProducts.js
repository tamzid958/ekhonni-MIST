import ProductDetails from "./ProductDetails";

class YourProducts{
    productList(){
        cy.get('p.font-bold.text-3xl').should("have.text","Your Products");
        return this   
    }
    clickDetailsButton(){
        cy.get('button[type="button"]').eq(1).click()
        const productDetails = new ProductDetails()
        return productDetails
    }
}
export default YourProducts