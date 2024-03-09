import LoginPage from "../Pages/LoginPage"
import LogoutPage from "../Pages/LogoutPage";
import PostApproval from "../Pages/PostApproval";

describe('Admin suite', () => {
    const loginPage = new LoginPage();
    const postApproval = new PostApproval();
    const logoutPage = new LogoutPage();
    before(()=>{
      loginPage.login("tahsina.mayome0703@gmail.com","123")
    })
    it('Post Approval by Admin', () => {
      postApproval.productDashboard()
                  .updateProductStatus()
    })
    after(()=>{
      logoutPage.logout()
    })
})