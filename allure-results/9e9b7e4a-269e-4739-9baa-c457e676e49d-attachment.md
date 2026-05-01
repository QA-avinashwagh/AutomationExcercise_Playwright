# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart\Cartpage.spec.js >> @regression @cart should displayed message when there is no product
- Location: tests\Cart\Cartpage.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#empty_cart')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#empty_cart')
    9 × locator resolved to <span id="empty_cart">…</span>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
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
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - generic [ref=e54] [cursor=pointer]: Proceed To Checkout
    - table [ref=e56]:
      - rowgroup [ref=e57]:
        - row "Item Description Price Quantity Total" [ref=e58]:
          - cell "Item" [ref=e59]
          - cell "Description" [ref=e60]
          - cell "Price" [ref=e61]
          - cell "Quantity" [ref=e62]
          - cell "Total" [ref=e63]
          - cell [ref=e64]
      - rowgroup [ref=e65]:
        - row "Product Image Madame Top For Women Women > Tops Rs. 1000 6 Rs. 6000 " [ref=e66]:
          - cell "Product Image" [ref=e67]:
            - link "Product Image" [ref=e68] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e69]
          - cell "Madame Top For Women Women > Tops" [ref=e70]:
            - heading "Madame Top For Women" [level=4] [ref=e71]:
              - link "Madame Top For Women" [ref=e72] [cursor=pointer]:
                - /url: /product_details/7
            - paragraph [ref=e73]: Women > Tops
          - cell "Rs. 1000" [ref=e74]:
            - paragraph [ref=e75]: Rs. 1000
          - cell "6" [ref=e76]:
            - button "6" [ref=e77] [cursor=pointer]
          - cell "Rs. 6000" [ref=e78]:
            - paragraph [ref=e79]: Rs. 6000
          - cell "" [ref=e80]:
            - generic [ref=e82] [cursor=pointer]: 
  - contentinfo [ref=e83]:
    - generic [ref=e88]:
      - heading "Subscription" [level=2] [ref=e89]
      - generic [ref=e90]:
        - textbox "Your email address" [ref=e91]
        - button "" [ref=e92] [cursor=pointer]:
          - generic [ref=e93]: 
        - paragraph [ref=e94]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e98]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
```

# Test source

```ts
  1  | const { test, expect } = require("../../fixtures/fixture");
  2  | const productData = require("../../test-data/productData.json");
  3  | 
  4  | 
  5  | test('@regression @cart should displayed message when there is no product', async ({ navigate, homePage, productPage, cartPage }) => {
  6  | 
  7  |     await homePage.goToCartPage();
  8  | 
  9  |     const emptyCartMsg = cartPage.getEmptyCartMsg();
  10 | 
> 11 |     await expect(emptyCartMsg).toBeVisible();
     |                                ^ Error: expect(locator).toBeVisible() failed
  12 | 
  13 |     await expect(emptyCartMsg).toHaveText("Cart is empty! Click here to buy products.")
  14 | 
  15 |     await expect(cartPage.isProductLinkDisplayedOnEmptyCart()).toBeVisible();
  16 | 
  17 | })
  18 | 
  19 | test('@regression @cart Added product to cart should be displayed with correct Quantity', async ({ navigate, homePage, productPage, cartPage }) => {
  20 | 
  21 |     await homePage.goToProducts();
  22 | 
  23 |     await productPage.clickOnAddToCart(productData.singleProduct.name);
  24 | 
  25 |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  26 | 
  27 |     await cartPage.clickOnViewCart();
  28 | 
  29 |     await expect(cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();
  30 |     const quantity = await cartPage.getProductQuantity(productData.singleProduct.name);
  31 |     await expect(quantity).toBe(1);
  32 | 
  33 | })
  34 | 
  35 | 
  36 | test('@regression @cart should remove one product when multiple products are in cart', async ({ navigate, homePage, productPage, cartPage }) => {
  37 | 
  38 |     await homePage.goToProducts();
  39 | 
  40 |     await productPage.clickOnAddToCart(productData.singleProduct.name);
  41 |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  42 |     await cartPage.clickOnContinueShopping();
  43 |     await productPage.clickOnAddToCart(productData.secondProduct.name);
  44 |     await cartPage.clickOnViewCart();
  45 | 
  46 |     await expect(cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();
  47 |     await expect(cartPage.getCartItem(productData.secondProduct.name)).toBeVisible();
  48 | 
  49 |     await cartPage.removeProductFromCart(productData.secondProduct.name);
  50 | 
  51 |     await expect(cartPage.getCartItem(productData.secondProduct.name)).toHaveCount(0);
  52 |     await expect(cartPage.getCartItem(productData.singleProduct.name)).toHaveCount(1);
  53 | 
  54 | })
  55 | 
  56 | 
```