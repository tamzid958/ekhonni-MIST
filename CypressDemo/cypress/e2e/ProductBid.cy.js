import LoginPage from "../Pages/LoginPage"
import LogoutPage from "../Pages/LogoutPage";
import LandingPage from "../Pages/LandingPage";

describe('Bid Product suite', () => {
    const loginPage = new LoginPage();
    const landingPage = new LandingPage();
    const logoutPage = new LogoutPage();
    beforeEach(()=>{
      loginPage.login("mayome0703@gmail.com","123")
    })
    
    it('Product Bid by Buyer', () => {
      landingPage.productDashboard()
                 .clickBuyButton()
                 .clickDetailsButton()
                 .productInfo()
                 .clickBidButton()
                 .startBid(150000)
                 .assertBidSuccessful("Bid added successfully")
    })
    // after(()=>{
    //     logoutPage.logout()
    // })
})