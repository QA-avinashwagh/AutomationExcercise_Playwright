# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout\CheckoutPage.spec.js >> @regression @checkout should complete checkout for single product
- Location: tests\Checkout\CheckoutPage.spec.js:12:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.product-image-wrapper').filter({ hasText: 'Madame Top For Women' }).filter({ has: locator('.productinfo p') })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.product-image-wrapper').filter({ hasText: 'Madame Top For Women' }).filter({ has: locator('.productinfo p') })

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
  1   | const {test,expect} = require("../../fixtures/fixture");
  2   | const paymentData = require("../../test-data/paymentData.json");
  3   | const products = require("../../test-data/productData.json");
  4   | 
  5   | test.beforeEach(async({navigate, homePage, cartPage})=>{
  6   | 
  7   |     await homePage.goToCartPage();
  8   |     await cartPage.ensureCartIsEmpty();
  9   | })
  10  | 
  11  | 
  12  | test('@regression @checkout should complete checkout for single product', async({navigate, homePage, productPage, cartPage, checkoutPage})=>{
  13  | 
  14  |     await homePage.goToProducts();
  15  | 
> 16  |     await expect(productPage.getProductCard(products.singleProduct.name)).toBeVisible();
      |                                                                           ^ Error: expect(locator).toBeVisible() failed
  17  | 
  18  |     const productPagePrice = await productPage.getProductPrice(products.singleProduct.name);
  19  | 
  20  |     await productPage.clickOnAddToCart(products.singleProduct.name);
  21  | 
  22  |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  23  |     await cartPage.clickOnViewCart();
  24  | 
  25  |     await expect(cartPage.getCartItem(products.singleProduct.name)).toBeVisible();
  26  |     const cartPagePrice = await cartPage.getProductPrice(products.singleProduct.name)
  27  |     await expect(cartPagePrice).toBe(productPagePrice);
  28  | 
  29  |     await cartPage.clickOnCheckOut();
  30  | 
  31  |     const checkoutPrice = await checkoutPage.getProductPrice(products.singleProduct.name);
  32  |     await expect (checkoutPrice).toEqual(productPagePrice);
  33  | 
  34  |     await checkoutPage.clickOnPlaceOrder();
  35  | 
  36  |     await checkoutPage.addPaymentDetails(
  37  |         paymentData.validMasterCard.cardHolderName,
  38  |         paymentData.validMasterCard.cardNumber,
  39  |         paymentData.validMasterCard.cvv,
  40  |         paymentData.validMasterCard.month,
  41  |         paymentData.validMasterCard.year);
  42  | 
  43  |     await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();
  44  | 
  45  | })
  46  | 
  47  | 
  48  | test("@checkout @regression should able to checkout multiple products correctly", async ({navigate, homePage, productPage, cartPage, checkoutPage }) => {
  49  | 
  50  |     //productPage
  51  |     const productData = [];
  52  |     await homePage.goToProducts();
  53  | 
  54  |     // Reading price and name from product page and continue shopping until last product and then click on add to cart 
  55  |     for (let i = 0; i < products.multipleProducts.length; i++) {
  56  | 
  57  |         const name = products.multipleProducts[i].name;
  58  |         const price = await productPage.getProductPrice(products.multipleProducts[i].name);
  59  | 
  60  |          productData.push({name, price});
  61  | 
  62  |         await productPage.clickOnAddToCart(products.multipleProducts[i].name);
  63  | 
  64  |         if (i != products.multipleProducts.length - 1) {
  65  |             await cartPage.clickOnContinueShopping();
  66  |         }
  67  |         else {
  68  |             await cartPage.clickOnViewCart();
  69  |         }
  70  |     }
  71  | 
  72  |     //Checking all products are present in cart page
  73  |     for (const product of products.multipleProducts) {
  74  |         await expect(cartPage.getCartItem(product.name)).toBeVisible();
  75  |     }
  76  | 
  77  |     await cartPage.clickOnCheckOut();
  78  | 
  79  |     let totalActualAmount = 0 ; 
  80  |     //checking Indvidual price of product at checkout is equal to product page and calculating total sum of of product price
  81  |     for (const item of productData){
  82  |         const checkoutPrice = await checkoutPage.getProductPrice(item.name);
  83  |         await expect (checkoutPrice).toEqual(item.price);
  84  |          const totalProductPrice = await checkoutPage.getProductTotalPrice(item.name);
  85  |         totalActualAmount = totalActualAmount + totalProductPrice;
  86  |      }
  87  | 
  88  |     const totalExpectedAmount = await checkoutPage.getProductsTotalAmount();
  89  | 
  90  |     await expect (totalActualAmount, "Mismatch in final total amount").toBe(totalExpectedAmount);
  91  | 
  92  |     await checkoutPage.clickOnPlaceOrder();
  93  | 
  94  |     await checkoutPage.addPaymentDetails(
  95  |         paymentData.validMasterCard.cardHolderName,
  96  |         paymentData.validMasterCard.cardNumber,
  97  |         paymentData.validMasterCard.cvv,
  98  |         paymentData.validMasterCard.month,
  99  |         paymentData.validMasterCard.year);
  100 | 
  101 |     await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();
  102 | })
  103 | 
  104 | test('@regression @checkout checkout displayed product price as per quantity wise', async({navigate,homePage, productPage, checkoutPage, cartPage})=>{
  105 | 
  106 |     await homePage.goToProducts();
  107 | 
  108 |     await expect(productPage.getProductCard(products.secondProduct.name)).toBeVisible();
  109 | 
  110 |     const productPagePrice = await productPage.getProductPrice(products.secondProduct.name);
  111 | 
  112 |     await productPage.clickOnProductDetails(products.secondProduct.name);
  113 |     
  114 |     await productPage.updateProductQuantity("5");
  115 | 
  116 |     await productPage.clickOnAddToCartFromDetailPage();
```