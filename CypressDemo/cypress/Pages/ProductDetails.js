class ProductDetails{
    productDetails(){
        // cy.get('.h-\[700px\] > :nth-child(1)').should("have.text","Product Details");
        cy.contains('Product Details').should('be.visible');
        return this   
    }
    clickViewBidsButton(){
        cy.get('button[type="button"]').click()
        return this
    }
    bidderList(){
        cy.get('label[for="first"]').should("have.text","Bidder List");
        return this 
    }
    acceptBid(){
        cy.contains('Enabled').should("have.text","Enabled")
        .then(() => {
              cy.wait(2000)
              cy.get('label[for="2"]').click()
              cy.get('button[type="button"]').eq(0).click()
        });
        return this
    }
    assertAcceptBidSuccessful(){
        cy.wait(2000)
        cy.get('.top-0 > span').should("have.text",'Selected')
    }
}

export default ProductDetails