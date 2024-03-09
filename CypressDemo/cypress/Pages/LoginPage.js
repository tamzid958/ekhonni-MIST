class LoginPage{
    login(username, password){
        cy.visit("localhost:3000/login")
        cy.get('input[placeholder="Email"]').type(username)
        cy.get('input[placeholder=Password]').type(password)
        cy.get('button[type="submit"]').click()
    }
}
export default LoginPage