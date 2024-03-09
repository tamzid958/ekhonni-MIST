class PostApproval{
    productDashboard(){
        cy.get('.__className_b1da2a > :nth-child(2) > .font-bold').should("have.text","Posts to Approve");
        return this
    }
    updateProductStatus(){
        cy.get('button[type="button"]').eq(1).click()
        return this
    }
}
export default PostApproval