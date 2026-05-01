# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Product\ProductPage.spec.js >> @product @regression should allow setting quantity before adding to cart
- Location: tests\Product\ProductPage.spec.js:88:1

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

Expected: 4
Received: 5
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
        - row "Product Image Madame Top For Women Women > Tops Rs. 1000 5 Rs. 5000 " [ref=e66]:
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
          - cell "5" [ref=e76]:
            - button "5" [ref=e77] [cursor=pointer]
          - cell "Rs. 5000" [ref=e78]:
            - paragraph [ref=e79]: Rs. 5000
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
```

# Test source

```ts
  8   |         await homePage.goToProducts();
  9   | 
  10  |         const title = productPage.getProductsTitle();
  11  |         await expect(title).toBeVisible();
  12  |         await expect(title).toContainText("All Products");
  13  | 
  14  |         //checking one product is visible atleast 
  15  |         await expect(await productPage.getProductCard(productData.singleProduct.name)).toBeVisible();
  16  | 
  17  |     });
  18  | 
  19  | test('@smoke @product Verify valid product search displays correct result'
  20  |     , async ({ navigate, homePage, productPage }) => {
  21  | 
  22  |         await homePage.goToProducts();
  23  | 
  24  |         await productPage.searchProduct(productData.singleProduct.name);
  25  | 
  26  |         const title = productPage.getSearchProductsTitle();
  27  |         await expect(title).toBeVisible();
  28  |         await expect(title).toContainText("Searched Products");
  29  | 
  30  |         //checking search product is visible  
  31  |         await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();
  32  | 
  33  |     })
  34  | 
  35  | test('@regression @product Verify invalid product name does not display any products',
  36  |     async ({ navigate, homePage, productPage }) => {
  37  | 
  38  |         await homePage.goToProducts();
  39  | 
  40  |         await productPage.searchProduct(productData.invalidProduct.name);
  41  | 
  42  |         const title = productPage.getSearchProductsTitle();
  43  |         await expect(title).toBeVisible();
  44  |         await expect(title).toContainText("Searched Products");
  45  | 
  46  |         //checking invalid search product is not visible
  47  |         await expect(productPage.getProductCard(productData.invalidProduct.name)).toHaveCount(0);
  48  | 
  49  |     })
  50  | 
  51  | 
  52  | test('@regression @product Add directly from product listing', async ({ navigate, homePage, productPage, cartPage }) => {
  53  | 
  54  |     await homePage.goToProducts();
  55  | 
  56  |     await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();
  57  | 
  58  |     await productPage.clickOnAddToCart(productData.singleProduct.name);
  59  | 
  60  |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  61  | 
  62  |     await cartPage.clickOnViewCart();
  63  | 
  64  |     await expect(await cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();
  65  | 
  66  | })
  67  | 
  68  | 
  69  | test('@regression @product should open product details page', async ({ navigate, homePage, productPage }) => {
  70  | 
  71  |     await homePage.goToProducts();
  72  | 
  73  |     //checking one product is visible atleast 
  74  |     await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();
  75  | 
  76  |     const productPagePrice = productPage.getProductPrice(productData.singleProduct.name);
  77  | 
  78  |     await productPage.clickOnProductDetails(productData.singleProduct.name);
  79  | 
  80  |     await expect(productPage.getProductName()).toBeVisible();
  81  | 
  82  |     await expect(productPage.getProductName()).toHaveText(productData.singleProduct.name);
  83  | 
  84  |     await expect(productPage.getProductPriceFromDetailPage()).toEqual(productPagePrice);
  85  | 
  86  | })
  87  | 
  88  | test('@product @regression should allow setting quantity before adding to cart', async ({ navigate, homePage, productPage, cartPage }) => {
  89  | 
  90  |     await homePage.goToProducts();
  91  | 
  92  |     //checking one product is visible atleast 
  93  |     await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();
  94  | 
  95  |     await productPage.clickOnProductDetails(productData.singleProduct.name);
  96  | 
  97  |     await expect(productPage.getProductName()).toBeVisible();
  98  |     await expect(await productPage.getProductName()).toHaveText(productData.singleProduct.name);
  99  | 
  100 |     await productPage.updateProductQuantity("4");
  101 |     await productPage.clickOnAddToCartFromDetailPage();
  102 | 
  103 |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  104 | 
  105 |     await cartPage.clickOnViewCart();
  106 | 
  107 |     await cartPage.getCartItem(productData.singleProduct.name);
> 108 |     await expect(await cartPage.getProductQuantity(productData.singleProduct.name)).toEqual(4);
      |                                                                                     ^ Error: expect(received).toEqual(expected) // deep equality
  109 | })
  110 | 
  111 | 
  112 | test("@regression @product should able to add product to cart", async ({ navigate, homePage, productPage, cartPage }) => {
  113 | 
  114 |     await homePage.goToProducts();
  115 | 
  116 |     //checking one product is visible atleast 
  117 |     await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();
  118 | 
  119 |     const productPagePrice = await productPage.getProductPrice(productData.singleProduct.name);
  120 | 
  121 |     await productPage.clickOnProductDetails(productData.singleProduct.name);
  122 | 
  123 |     await expect(productPage.getProductName()).toBeVisible();
  124 | 
  125 |     await expect(await productPage.getProductName()).toHaveText(productData.singleProduct.name);
  126 | 
  127 |     await expect(await productPage.getProductPriceFromDetailPage()).toEqual(productPagePrice);
  128 | 
  129 |     await productPage.clickOnAddToCartFromDetailPage();
  130 | 
  131 |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  132 | })
  133 | 
  134 | 
  135 | 
  136 | 
  137 | 
```