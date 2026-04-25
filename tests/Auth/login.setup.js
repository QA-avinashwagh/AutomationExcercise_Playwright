    const {test, expect}= require("@playwright/test");
    const {LoginPage}= require("../../pages/LoginPage");
    const { HomePage } = require("../../pages/HomePage");
    const userData = require("../../test-data/userData.json")

    const email = userData.validUser1.email;
    const password = userData.validUser1.password;
    const userName = userData.validUser1.username;

    test('generate storage state for authenticated user', async({page})=>{

        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        await loginPage.navigate();
        await loginPage.login(email, password);

        await expect(homePage.getUserName()).toHaveText(userName);

        await page.context().storageState({path:'playwright/.auth/user.json'});

    })
