class PostProduct{
    addProductInfo(){
        cy.get('select[name="category"]').select('Furniture')
        cy.get('select[name="subcategory"]').select('Tables')
        cy.get('input[name="name"]').type('Dining Table')
        cy.get('input[name="size"]').type('42"x36"')
        cy.get('input[name="description"]').type('Perfect for 4')
        cy.get('input[name="startingPrice"]').type('50000')
        cy.get('input[id="Condition2"]').click()
        cy.get('input[id="Bidding1"]').click()
        cy.fixture('Screenshot.png').then(fileContent => {
            cy.get('input[type="file"]').attachFile({ 
            fileContent, fileName: 'Screenshot.png', mimeType: 'image/png' });
        });
        return this
    }
    clickOnPost(){
        cy.get('button[type="Submit"]').click()
        return this
    }
    assertPostProductSuccessful(expectedText){
        cy.get('[data-content=""] > div').should("have.text",expectedText)
    }
}
export default PostProduct