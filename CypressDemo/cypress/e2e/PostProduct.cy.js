import LoginPage from "../Pages/LoginPage"
import LogoutPage from "../Pages/LogoutPage";
import LandingPage from "../Pages/LandingPage";

describe('Post Product suite', () => {
    const loginPage = new LoginPage();
    const landingPage = new LandingPage();
    const logoutPage = new LogoutPage();
    beforeEach(()=>{
      loginPage.login("mayome0703@gmail.com","123")
    })
    it('Post Approval by Admin', () => {
      landingPage.productDashboard()
                .clickPostProduct()
                .addProductInfo()
                .clickOnPost()
                .assertPostProductSuccessful("Product added successfully")
    })
})