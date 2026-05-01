# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout\CheckoutPage.spec.js >> @checkout @regression should able to checkout multiple products correctly
- Location: tests\Checkout\CheckoutPage.spec.js:48:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
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
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Darrel Malone
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link [ref=e48] [cursor=pointer]:
          - /url: /
          - text: Home
      - listitem [ref=e49]: Shopping Cart
    - paragraph [ref=e52]:
      - text: Cart is empty! Click
      - link [ref=e53] [cursor=pointer]:
        - /url: /products
        - text: here
      - text: to buy products.
  - contentinfo [ref=e54]:
    - generic [ref=e59]:
      - heading [level=2] [ref=e60]: Subscription
      - generic [ref=e61]:
        - textbox [ref=e62]:
          - /placeholder: Your email address
        - button [ref=e63] [cursor=pointer]:
          - generic [ref=e64]: 
        - paragraph [ref=e65]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e69]: Copyright © 2021 All rights reserved
  - text: 
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
  9  |             this.cartLink = page.locator("a[href*='view_cart']").first();
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
  29 |                 this.page.waitForURL('**/view_cart'),
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