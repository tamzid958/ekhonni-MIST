class LogoutPage{
    logout(){
        cy.visit("http://localhost:3000/admin-page")
        cy.get('.px-4').click()
    }
}
export default LogoutPage