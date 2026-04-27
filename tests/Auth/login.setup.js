    const {test, expect}= require("@playwright/test");
    const {LoginPage}= require("../../pages/LoginPage");
    const { HomePage } = require("../../pages/HomePage");

    const email = "Ashely@mailinator.com"
    const password = "Admin@123"
    const userName = "Darrel Malone"

    test('generate storage state for authenticated user', async({page})=>{

        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await loginPage.navigate();
        await loginPage.login(email, password);

        await expect(homePage.getUserName()).toHaveText(userName);

        await page.context().storageState({path:'playwright/.auth/user.json'});

    })
