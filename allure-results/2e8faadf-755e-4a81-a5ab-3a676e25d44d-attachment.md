# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Auth\Register.spec.js >> @Smoke should register new user successfully
- Location: tests\Auth\Register.spec.js:9:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.navbar-nav b')
Expected: "John"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('.navbar-nav b')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e40]:
    - heading [level=2] [ref=e41]: Account Created!
    - paragraph [ref=e42]: Congratulations! Your new account has been successfully created!
    - paragraph [ref=e43]: You can now take advantage of member privileges to enhance your online shopping experience with us.
    - link [ref=e45] [cursor=pointer]:
      - /url: /
      - text: Continue
  - contentinfo [ref=e46]:
    - generic [ref=e51]:
      - heading [level=2] [ref=e52]: Subscription
      - generic [ref=e53]:
        - textbox [ref=e54]:
          - /placeholder: Your email address
        - button [ref=e55] [cursor=pointer]:
          - generic [ref=e56]: 
        - paragraph [ref=e57]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e61]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | const { test, expect } = require("../../fixtures/fixture");
  2  | const userData = require("../../test-data/registerUserData.json");
  3  | const regUser = require("../../test-data/userData.json");
  4  | 
  5  | const user = userData.validUser1;
  6  | const uniqueTime = Date.now().toString().slice(-6);
  7  | const userEmail = `${user.emailPrefix}_${uniqueTime}@yopmail.com`;
  8  | 
  9  | test("@Smoke should register new user successfully", async ({registerPage, homePage,loginPage }) => {
  10 | 
  11 |     await registerPage.gotoRegisterPage();
  12 | 
  13 |     await registerPage.fillBasicUserDetails(user.firstName, userEmail);
  14 | 
  15 |     await registerPage.setAccountInfo("Mr.", user.password, user.DOB.Date, user.DOB.Month, user.DOB.Year);
  16 | 
  17 |     await registerPage.setAddressInformation(
  18 |         user.firstName, user.lastName, user.addressInfo.company, user.addressInfo.address1, user.addressInfo.address2,
  19 |         user.addressInfo.country, user.addressInfo.state, user.addressInfo.city, user.addressInfo.zipcode,
  20 |         user.addressInfo.mobile
  21 |     );
  22 | 
  23 |     await registerPage.clickOnCreateAccount();
  24 | 
  25 |     await expect(registerPage.getAccountCreatedMsg()).toBeVisible();
  26 |     await registerPage.clickOnContinueBtn();
  27 | 
> 28 |     await expect(homePage.getUserName()).toHaveText(user.firstName);
     |                                          ^ Error: expect(locator).toHaveText(expected) failed
  29 |     await expect(loginPage.page).toHaveURL('/');
  30 | })
  31 | 
  32 | 
  33 | test("@regression should not allow registration with existing email", async ({registerPage,loginPage}) => {
  34 | 
  35 |     await registerPage.gotoRegisterPage();
  36 | 
  37 |     await registerPage.fillBasicUserDetails(userData.validUser1.firstName, regUser.validUser1.email);
  38 | 
  39 |     await expect(registerPage.getAlreadyAcoountCreatedMsg()).toBeVisible();
  40 |     await expect(registerPage.getAlreadyAcoountCreatedMsg()).toContainText("Email Address already exist!");
  41 |     await expect(loginPage.page).toHaveURL(/signup/);
  42 | })
```