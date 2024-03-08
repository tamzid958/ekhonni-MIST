import LoginPage from "../Pages/LoginPage"
describe('Login suite', () => {
    const loginPage = new LoginPage();
    it('Post Approval by Admin', () => {
        loginPage.login("tahsina.mayome0703@gmail.com","123")
    })
})