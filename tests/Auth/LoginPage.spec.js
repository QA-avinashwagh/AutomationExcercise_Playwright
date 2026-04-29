const { test, expect } = require("../../fixtures/fixture");
const userData = require("../../test-data/userData.json")


test("@Smoke should login successfully with valid credentials", async ({loginPage, homePage}) => {

    await loginPage.navigate();
    await loginPage.login(userData.validUser1.email, userData.validUser1.password);

    await expect(homePage.getUserName()).toHaveText(userData.validUser1.username);
})

test("@Regression should show error for invalid login", async ({ loginPage }) => {

    await loginPage.navigate()
    await loginPage.login(userData.invalidUser.email, userData.invalidUser.password);

    await expect(loginPage.getErrorMsgOnLogin()).toContainText("Your email or password is incorrect!");
    await expect(loginPage.page).toHaveURL(/login/);
})

test('@Smoke should logout successfully', async ({ loginPage, homePage }) => {

    await loginPage.navigate();
    await loginPage.login(userData.validUser2.email, userData.validUser2.password);

    await expect(homePage.getUserName()).toHaveText(userData.validUser2.username);
    await homePage.clickOnLogout();

    await expect(loginPage.inpEmail).toBeVisible();
    await expect(loginPage.page).toHaveURL(/login/);

})
