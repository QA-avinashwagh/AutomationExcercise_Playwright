# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Product\ProductPage.spec.js >> @regression @product should open product details page
- Location: tests\Product\ProductPage.spec.js:69:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
```

# Test source

```ts
  1  |     class HomePage {
  2  | 
  3  |         /** @param {import('@playwright/test').Page} page */
  4  |         constructor(page) {
  5  |             this.page = page;
  6  |             this.userNameOnNavBar = page.locator(".navbar-nav b");
  7  |             this.productLink = page.locator(".navbar-nav  [href*='products']");
  8  |             this.logOutLink = page.locator("[href*='logout']");
  9  |             this.cartLink = page.getByRole('link', {name:'cart'});
  10 |         }
  11 | 
  12 |         async goToHomePage(){
  13 |             await this.page.goto('/')
  14 |         }
  15 | 
  16 |         getUserName() {
  17 |             return  this.userNameOnNavBar;
  18 |         }
  19 | 
  20 |         async goToProducts() {
  21 |             await Promise.all([
> 22 |             this.page.waitForLoadState('networkidle'),
     |                       ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  23 |             this.productLink.click()
  24 |          ]);
  25 |         }
  26 | 
  27 |         async goToCartPage(){
  28 |             await Promise.all([
  29 |                 this.page.waitForLoadState("networkidle"),
  30 |                 this.cartLink.click()
  31 |             ]);
  32 |         }
  33 | 
  34 |         async clickOnLogout() {
  35 |             await this.logOutLink.click();
  36 |         }
  37 | 
  38 | 
  39 |     }
  40 |     module.exports={HomePage};
```