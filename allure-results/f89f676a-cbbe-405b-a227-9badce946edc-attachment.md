# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart\Cartpage.spec.js >> @regression @cart should displayed message when there is no product
- Location: tests\Cart\Cartpage.spec.js:11:1

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.cart_quantity_delete').first()
    - locator resolved to <a data-product-id="7" class="cart_quantity_delete">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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
        - row "Product Image Madame Top For Women Women > Tops Rs. 1000 10 Rs. 10000 " [ref=e66]:
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
          - cell "10" [ref=e76]:
            - button "10" [ref=e77] [cursor=pointer]
          - cell "Rs. 10000" [ref=e78]:
            - paragraph [ref=e79]: Rs. 10000
          - cell "" [ref=e80]:
            - generic [ref=e82] [cursor=pointer]: 
        - row "Product Image Winter Top Women > Tops Rs. 600 2 Rs. 1200 " [ref=e83]:
          - cell "Product Image" [ref=e84]:
            - link "Product Image" [ref=e85] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e86]
          - cell "Winter Top Women > Tops" [ref=e87]:
            - heading "Winter Top" [level=4] [ref=e88]:
              - link "Winter Top" [ref=e89] [cursor=pointer]:
                - /url: /product_details/5
            - paragraph [ref=e90]: Women > Tops
          - cell "Rs. 600" [ref=e91]:
            - paragraph [ref=e92]: Rs. 600
          - cell "2" [ref=e93]:
            - button "2" [ref=e94] [cursor=pointer]
          - cell "Rs. 1200" [ref=e95]:
            - paragraph [ref=e96]: Rs. 1200
          - cell "" [ref=e97]:
            - generic [ref=e99] [cursor=pointer]: 
        - row "Product Image Summer White Top Women > Tops Rs. 400 1 Rs. 400 " [ref=e100]:
          - cell "Product Image" [ref=e101]:
            - link "Product Image" [ref=e102] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e103]
          - cell "Summer White Top Women > Tops" [ref=e104]:
            - heading "Summer White Top" [level=4] [ref=e105]:
              - link "Summer White Top" [ref=e106] [cursor=pointer]:
                - /url: /product_details/6
            - paragraph [ref=e107]: Women > Tops
          - cell "Rs. 400" [ref=e108]:
            - paragraph [ref=e109]: Rs. 400
          - cell "1" [ref=e110]:
            - button "1" [ref=e111] [cursor=pointer]
          - cell "Rs. 400" [ref=e112]:
            - paragraph [ref=e113]: Rs. 400
          - cell "" [ref=e114]:
            - generic [ref=e116] [cursor=pointer]: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - contentinfo [ref=e117]:
    - generic [ref=e122]:
      - heading "Subscription" [level=2] [ref=e123]
      - generic [ref=e124]:
        - textbox "Your email address" [ref=e125]
        - button "" [ref=e126] [cursor=pointer]:
          - generic [ref=e127]: 
        - paragraph [ref=e128]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - generic [ref=e129]:
      - paragraph [ref=e132]: Copyright © 2021 All rights reserved
      - generic:
        - insertion:
          - generic:
            - iframe
  - text: 
```

# Test source

```ts
  1  | class CartPage {
  2  | 
  3  |     /** @param {import('@playwright/test').Page} page */
  4  |     constructor(page) {
  5  |         this.page = page;
  6  | 
  7  |         //modal 
  8  |         this.cartModal = page.locator(".modal-content");
  9  |         this.viewCartLink = this.cartModal.getByRole("link", { name: 'View Cart' })
  10 |         this.continueShoppingBtn = this.cartModal.getByRole("button", { name: 'Continue Shopping' });
  11 | 
  12 |         this.emptyCartMsg = page.locator('#empty_cart');
  13 | 
  14 |         this.proccedToCheckoutBtn = page.getByText('Proceed To Checkout')   ;
  15 | 
  16 |         this.allCartProductInfo = page.locator("#cart_info tbody tr");
  17 |     }
  18 | 
  19 |     getProductAddedToCartMsg() {
  20 |         return this.cartModal.filter('p').first();
  21 |     }
  22 | 
  23 |     async clickOnViewCart() {
  24 |         await this.viewCartLink.click();
  25 |     }
  26 | 
  27 |     async clickOnContinueShopping() {
  28 |         await this.continueShoppingBtn.click();
  29 |     }
  30 | 
  31 |     getEmptyCartMsg(){
  32 |         return this.emptyCartMsg;
  33 |     }
  34 | 
  35 |     isProductLinkDisplayedOnEmptyCart(){
  36 |         return this.emptyCartMsg.locator("[href*='/products']");
  37 |     }
  38 | 
  39 |     async clickOnCheckOut() {
  40 |         await this.proccedToCheckoutBtn.click();
  41 |     }
  42 | 
  43 |     getCartItem(productName) {
  44 |         return this.allCartProductInfo.filter({
  45 |             has: this.page.locator('td', { hasText: productName })});
  46 |     }
  47 | 
  48 |     async isProductInCart(productName) {
  49 |         return await this.getCartItem(productName).isVisible();
  50 |     }
  51 | 
  52 |     async getProductQuantity(productName) {
  53 |         const qunt =  await this.getCartItem(productName)
  54 |             .locator('.cart_quantity button')
  55 |             .textContent();
  56 | 
  57 |         return Number(qunt.trim());
  58 |     }
  59 | 
  60 |     async getProductPrice(productName) {
  61 |         const price = await this.getCartItem(productName)
  62 |             .locator('.cart_price')
  63 |             .textContent();
  64 | 
  65 |         return Number(price.replace(/[^\d]/g, ''));
  66 |     }
  67 | 
  68 |     async getProductTotalPrice(productName) {
  69 |         return await this.getCartItem(productName)
  70 |             .locator('.cart_total_price')
  71 |             .textContent();
  72 |     }
  73 | 
  74 |     async removeProductFromCart(productName) {
  75 |         await this.getCartItem(productName).locator('.cart_quantity_delete').click();
  76 |     }
  77 | 
  78 |     //this will remove first item of cart to be removed
  79 |     async removeFirstCartItem(){
> 80 |         await this.page.locator('.cart_quantity_delete').first().click();
     |                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  81 |     }
  82 | 
  83 |     //this will ensure cart is empty used for test to be clean 
  84 |     async ensureCartIsEmpty(){
  85 | 
  86 |         const items = await this.allCartProductInfo.count();
  87 | 
  88 |         while(items > 0){
  89 |             await this.removeFirstCartItem();
  90 |         }
  91 | 
  92 |     }
  93 | 
  94 | 
  95 | 
  96 | }
  97 | module.exports={CartPage};
```