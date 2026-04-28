const { test, expect } = require("../../fixtures/fixture");
const userData = require("../../test-data/registerUserData.json");
const regUser = require("../../test-data/userData.json");

const user = userData.validUser1;
const uniqueTime = Date.now().toString().slice(-6);
const userEmail = `${user.emailPrefix}_${uniqueTime}@yopmail.com`;

test("@Smoke should register new user successfully", async ({registerPage, homePage,loginPage }) => {

    await registerPage.gotoRegisterPage();

    await registerPage.fillBasicUserDetails(user.firstName, userEmail);

    await registerPage.setAccountInfo("Mr.", user.password, user.DOB.Date, user.DOB.Month, user.DOB.Year);

    await registerPage.setAddressInformation(
        user.firstName, user.lastName, user.addressInfo.company, user.addressInfo.address1, user.addressInfo.address2,
        user.addressInfo.country, user.addressInfo.state, user.addressInfo.city, user.addressInfo.zipcode,
        user.addressInfo.mobile
    );

    await registerPage.clickOnCreateAccount();

    await expect(registerPage.getAccountCreatedMsg()).toBeVisible();
    await registerPage.clickOnContinueBtn();

    await expect(homePage.getUserName()).toHaveText(user.firstName);
    await expect(loginPage.page).toHaveURL('/');
})


test("@regression should not allow registration with existing email", async ({registerPage,loginPage}) => {

    await registerPage.gotoRegisterPage();

    await registerPage.fillBasicUserDetails(userData.validUser1.firstName, regUser.validUser1.email);

    await expect(registerPage.getAlreadyAcoountCreatedMsg()).toBeVisible();
    await expect(registerPage.getAlreadyAcoountCreatedMsg()).toContainText("Email Address already exist!");
    await expect(loginPage.page).toHaveURL(/signup/);
})