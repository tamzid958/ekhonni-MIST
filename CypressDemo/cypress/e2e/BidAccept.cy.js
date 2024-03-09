import LoginPage from "../Pages/LoginPage"
import LogoutPage from "../Pages/LogoutPage";
import LandingPage from "../Pages/LandingPage";

describe('Accept Bid suite', () => {
    const loginPage = new LoginPage();
    const landingPage = new LandingPage();
    const logoutPage = new LogoutPage();
    beforeEach(()=>{
      loginPage.login("rafsanprove420@gmail.com","123")
    })
    it('Bid Accepted by Buyer', () => {
      landingPage.productDashboard()
                 .clickAccountButton()
                 .clickYourProductsButton()
                 .productList()
                 .clickDetailsButton()
                 .productDetails()
                 .clickViewBidsButton()
                 .bidderList()
                 .acceptBid()
                 .assertAcceptBidSuccessful()
    })
    // after(()=>{
    //     logoutPage.logout()
    // })
})