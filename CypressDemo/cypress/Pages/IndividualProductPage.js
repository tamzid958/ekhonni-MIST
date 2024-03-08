class IndividualProductPage{
    productInfo(){
        cy.get('h1.font-semibold.text-4xl').should("have.text","Product Details");
        return this
    }
    clickBidButton(){
        cy.get('button[type="button"]').click()
        return this
    }
    startBid(bidValue){
        cy.get('label[for="bidAmount"]').should("have.text","Enter Bid Amount")
        cy.get('#bidAmount').type(bidValue)
        cy.contains('Place Bid').click();
        return this
    }
    assertBidSuccessful(expectedText){
        cy.get('[data-content=""] > div').eq(0).should("have.text",expectedText)
    }
}
export default IndividualProductPage