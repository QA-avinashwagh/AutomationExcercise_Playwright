# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout\CheckoutPage.spec.js >> @regression @checkout should complete checkout for single product
- Location: tests\Checkout\CheckoutPage.spec.js:5:1

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://automationexercise.com/", waiting until "load"

```

# Test source

```ts
  1  | const{test:base, expect} =require("@playwright/test");
  2  | const { LoginPage } = require("../pages/LoginPage");
  3  | const { HomePage } = require("../pages/HomePage");
  4  | const { ProductPage} = require("../pages/ProductPage");
  5  | const { CartPage } = require("../pages/CartPage");
  6  | const { CheckoutPage } = require("../pages/CheckoutPage");
  7  | const { RegisterPage } = require("../pages/RegisterPage");
  8  | const userData = require("../test-data/userData.json")
  9  | 
  10 | exports.test = base.extend({
  11 | 
  12 |     loginPage : async({page}, use)=>{
  13 |         await use(new LoginPage(page));
  14 |     }, 
  15 | 
  16 |     homePage : async({page}, use)=>{
  17 |         await use(new HomePage(page));
  18 |     }, 
  19 | 
  20 |     registerPage : async({page},use)=>{
  21 |         await use(new RegisterPage(page));
  22 |     },
  23 | 
  24 |     productPage : async({page}, use)=>{
  25 |         await use(new ProductPage(page));
  26 |     }, 
  27 | 
  28 |     cartPage : async ({page}, use) => {
  29 |         await use(new CartPage(page));
  30 |         
  31 |     }, 
  32 |     
  33 |     checkoutPage : async ({page}, use) => {
  34 |         await use(new CheckoutPage(page));
  35 |     }, 
  36 | 
  37 |     loggedInPage : async({page, loginPage}, use) =>{
  38 |         await loginPage.navigate();
  39 |         await loginPage.login(userData.validUser1.email, userData.validUser1.password);
  40 |         await use(page);
  41 |     }, 
  42 |     
  43 |     navigate : async({page}, use)=>{
> 44 |         await page.goto('/');
     |                    ^ Error: page.goto: Test ended.
  45 |         await use(page);
  46 |     } 
  47 | 
  48 | })
  49 | exports.expect= expect;
  50 | 
```