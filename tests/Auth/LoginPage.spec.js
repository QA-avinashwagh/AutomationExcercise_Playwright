const { test, expect } = require("../../fixtures/fixture");
const userData = require("../../test-data/userData.json")


test("@Smoke Verify user can login successfully", async ({ loginPage, homePage }) => {

    await loginPage.navigate();
    await loginPage.login(userData.validUser1.email, userData.validUser1.password);

    await expect(homePage.getUserName()).toHaveText(userData.validUser1.username);
})

test("@Regression Verify invalid login attempt", async ({ loginPage }) => {

    await loginPage.navigate()
    await loginPage.login(userData.invalidUser.email, userData.invalidUser.password);

    await expect(loginPage.getErrorMsgOnLogin()).toHaveText("Your email or password is incorrect!");

})

test('@Smoke Verify user can logout from app', async ({ loginPage, homePage }) => {

    await loginPage.navigate();
    await loginPage.login(userData.validUser2.email, userData.validUser2.password);

    await expect(homePage.getUserName()).toHaveText(userData.validUser2.username);
    await homePage.clickOnLogout();

    await expect(loginPage.inpEmail).toBeVisible();
    await expect(loginPage.page).toHaveURL(/login/);

})
