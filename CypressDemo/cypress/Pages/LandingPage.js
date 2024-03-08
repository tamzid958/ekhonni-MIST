import PostProduct from "./PostProduct";
import ProductPage from "./ProductPage";
import YourProducts from "./YourProducts";

class LandingPage{
    productDashboard(){
        cy.get(':nth-child(1) > .flex > .text-lg').should("have.text","All ads");
        return this   
    }
    clickPostProduct(){
        cy.get('.px-6 > :nth-child(2) > a > .px-4').click()
        const postProduct = new PostProduct()
        return postProduct
    }
    clickBuyButton(){
        cy.get('button[type="Submit"]').eq(1).click()
        cy.wait(2000)
        const productPage = new ProductPage()
        return productPage
    }
    clickAccountButton(){
        cy.contains('Account').parent('.flex').click()
        return this
    }
    clickYourProductsButton(){
        cy.get('button[type="button"]').eq(1).click()
        const yourProducts = new YourProducts()
        return yourProducts
    }
   
}
export default LandingPage