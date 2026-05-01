# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Product\ProductPage.spec.js >> @regression @product should open product details page
- Location: tests\Product\ProductPage.spec.js:69:1

# Error details

```
Error: locator.textContent: Test ended.
Call log:
  - waiting for locator('.product-image-wrapper').filter({ hasText: 'Madame Top For Women' }).filter({ has: locator('.productinfo p') }).locator('.overlay-content h2')

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
  52 |         await product.hover();
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
> 65 |         const price = await product.locator(".overlay-content h2").textContent();
     |                                                                    ^ Error: locator.textContent: Test ended.
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