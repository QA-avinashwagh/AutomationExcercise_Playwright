# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart\Cartpage.spec.js >> @regression @cart Added product to cart should be displayed with correct Quantity
- Location: tests\Cart\Cartpage.spec.js:25:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
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
  1  | class ProductPage {
  2  | 
  3  |     /** @param {import('@playwright/test').Page} page */
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.productsTitle = page.getByText("ALL PRODUCTS");
  7  |         this.searchProductTitle = page.getByRole('heading', { name: "Searched Products" });
  8  |         this.inpSearchBox = page.getByPlaceholder('Search Product');
  9  |         this.btnSubmitSearch = page.locator("#submit_search");
  10 |         this.allProductsCard = page.locator(".product-image-wrapper");
  11 | 
  12 |         //product detail page locators 
  13 |         this.productName = page.locator(".product-information h2");
  14 |         this.priceProductDetail = page.getByText('Rs.');
  15 |         this.addToCartProductDetail = page.getByRole("button", { name: 'Add to cart' });
  16 |         this.quantityInp = page.locator('#quantity');
  17 |         this.availiblityStatus = page.getByText("Availability");
  18 |     }
  19 | 
  20 |     getProductsTitle() {
  21 |         return this.productsTitle;
  22 |     }
  23 | 
  24 |     getSearchProductsTitle() {
  25 |         return this.searchProductTitle;
  26 |     }
  27 | 
  28 |     async searchProduct(productName) {
  29 |         await this.inpSearchBox.fill(productName);
  30 | 
  31 |         await Promise.all([
  32 |             this.page.waitForLoadState('networkidle'),
  33 |             this.btnSubmitSearch.click()
  34 |         ]);
  35 |     }
  36 | 
  37 |     getProductCard(productName) {
  38 |         return this.allProductsCard.filter({
  39 |             has: this.page.locator('.productinfo p'), hasText: productName
  40 |         });
  41 |     }
  42 | 
  43 |     async clickOnProductDetails(productName) {
  44 |         const product = this.getProductCard(productName);
  45 |         await product.locator("a[href*='product_details']").click();
  46 |     }
  47 | 
  48 |     async clickOnAddToCart(productName) {
  49 |         const product = this.getProductCard(productName);
  50 | 
  51 |         //Hover on product 
> 52 |         await product.hover();
     |                       ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  53 | 
  54 |         //click on add to cart for overlay content
  55 |         await product.locator(".overlay-content a").click();
  56 |     }
  57 | 
  58 |     async getProductPrice(productName) {
  59 |         const product = this.getProductCard(productName);
  60 | 
  61 |         //Hover on product 
  62 |         await product.hover();
  63 | 
  64 |         //click on add to cart for overlay content
  65 |         const price = await product.locator(".overlay-content h2").textContent();
  66 |         return Number(price.replace(/[^\d]/g, ''));
  67 |     }
  68 | 
  69 |     //Product details method 
  70 |     getProductName() {
  71 |         return this.productName;
  72 |     }
  73 | 
  74 |     async getProductPriceFromDetailPage() {
  75 |         const price = await this.priceProductDetail.textContent();
  76 | 
  77 |         return Number(price.replace(/[^\d]/g, ''));
  78 |     }
  79 | 
  80 |     async getProductAvailiblityStatus() {
  81 |         await this.availiblityStatus().inner
  82 |     }
  83 | 
  84 |     async updateProductQuantity(quntity){
  85 |         await this.quantityInp.fill(quntity);
  86 |     }
  87 | 
  88 |     async clickOnAddToCartFromDetailPage() {
  89 |         await this.addToCartProductDetail.click();
  90 |     }
  91 | 
  92 | 
  93 | }
  94 | module.exports = { ProductPage };
```