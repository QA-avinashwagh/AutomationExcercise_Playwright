# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout\CheckoutPage.spec.js >> @checkout @regression should able to checkout multiple products correctly
- Location: tests\Checkout\CheckoutPage.spec.js:41:1

# Error details

```
Error: Mismatch in final total amount

expect(received).toBe(expected) // Object.is equality

Expected: 9444
Received: 5199
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
      - listitem [ref=e49]: Checkout
    - heading "Address Details" [level=2] [ref=e51]
    - generic [ref=e53]:
      - list [ref=e55]:
        - listitem [ref=e56]:
          - heading "Your delivery address" [level=3] [ref=e57]
        - listitem [ref=e58]: Mr. Albert Hayden
        - listitem [ref=e59]: Barker Spencer Associates
        - listitem [ref=e60]: Dillon and Mckee Inc
        - listitem [ref=e61]: Duis explicabo Veli
        - listitem [ref=e62]: 52101 Possimus eius delen 45791
        - listitem [ref=e63]: Israel
        - listitem [ref=e64]: "425"
      - list [ref=e66]:
        - listitem [ref=e67]:
          - heading "Your billing address" [level=3] [ref=e68]
        - listitem [ref=e69]: Mr. Albert Hayden
        - listitem [ref=e70]: Barker Spencer Associates
        - listitem [ref=e71]: Dillon and Mckee Inc
        - listitem [ref=e72]: Duis explicabo Veli
        - listitem [ref=e73]: 52101 Possimus eius delen 45791
        - listitem [ref=e74]: Israel
        - listitem [ref=e75]: "425"
    - heading "Review Your Order" [level=2] [ref=e77]
    - table [ref=e79]:
      - rowgroup [ref=e80]:
        - row "Item Description Price Quantity Total" [ref=e81]:
          - cell "Item" [ref=e82]
          - cell "Description" [ref=e83]
          - cell "Price" [ref=e84]
          - cell "Quantity" [ref=e85]
          - cell "Total" [ref=e86]
          - cell [ref=e87]
      - rowgroup [ref=e88]:
        - row "Product Image Fancy Green Top Women > Tops Rs. 700 1 Rs. 700" [ref=e89]:
          - cell "Product Image" [ref=e90]:
            - link "Product Image" [ref=e91] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e92]
          - cell "Fancy Green Top Women > Tops" [ref=e93]:
            - heading "Fancy Green Top" [level=4] [ref=e94]:
              - link "Fancy Green Top" [ref=e95] [cursor=pointer]:
                - /url: /product_details/8
            - paragraph [ref=e96]: Women > Tops
          - cell "Rs. 700" [ref=e97]:
            - paragraph [ref=e98]: Rs. 700
          - cell "1" [ref=e99]:
            - button "1" [ref=e100] [cursor=pointer]
          - cell "Rs. 700" [ref=e101]:
            - paragraph [ref=e102]: Rs. 700
        - row "Product Image Soft Stretch Jeans Men > Jeans Rs. 799 1 Rs. 799" [ref=e103]:
          - cell "Product Image" [ref=e104]:
            - link "Product Image" [ref=e105] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e106]
          - cell "Soft Stretch Jeans Men > Jeans" [ref=e107]:
            - heading "Soft Stretch Jeans" [level=4] [ref=e108]:
              - link "Soft Stretch Jeans" [ref=e109] [cursor=pointer]:
                - /url: /product_details/33
            - paragraph [ref=e110]: Men > Jeans
          - cell "Rs. 799" [ref=e111]:
            - paragraph [ref=e112]: Rs. 799
          - cell "1" [ref=e113]:
            - button "1" [ref=e114] [cursor=pointer]
          - cell "Rs. 799" [ref=e115]:
            - paragraph [ref=e116]: Rs. 799
        - row "Product Image Rose Pink Embroidered Maxi Dress Women > Dress Rs. 2300 1 Rs. 2300" [ref=e117]:
          - cell "Product Image" [ref=e118]:
            - link "Product Image" [ref=e119] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e120]
          - cell "Rose Pink Embroidered Maxi Dress Women > Dress" [ref=e121]:
            - heading "Rose Pink Embroidered Maxi Dress" [level=4] [ref=e122]:
              - link "Rose Pink Embroidered Maxi Dress" [ref=e123] [cursor=pointer]:
                - /url: /product_details/38
            - paragraph [ref=e124]: Women > Dress
          - cell "Rs. 2300" [ref=e125]:
            - paragraph [ref=e126]: Rs. 2300
          - cell "1" [ref=e127]:
            - button "1" [ref=e128] [cursor=pointer]
          - cell "Rs. 2300" [ref=e129]:
            - paragraph [ref=e130]: Rs. 2300
        - row "Product Image Colour Blocked Shirt – Sky Blue Kids > Tops & Shirts Rs. 849 5 Rs. 4245" [ref=e131]:
          - cell "Product Image" [ref=e132]:
            - link "Product Image" [ref=e133] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e134]
          - cell "Colour Blocked Shirt – Sky Blue Kids > Tops & Shirts" [ref=e135]:
            - heading "Colour Blocked Shirt – Sky Blue" [level=4] [ref=e136]:
              - link "Colour Blocked Shirt – Sky Blue" [ref=e137] [cursor=pointer]:
                - /url: /product_details/24
            - paragraph [ref=e138]: Kids > Tops & Shirts
          - cell "Rs. 849" [ref=e139]:
            - paragraph [ref=e140]: Rs. 849
          - cell "5" [ref=e141]:
            - button "5" [ref=e142] [cursor=pointer]
          - cell "Rs. 4245" [ref=e143]:
            - paragraph [ref=e144]: Rs. 4245
        - row "Product Image Lace Top For Women Women > Tops Rs. 1400 1 Rs. 1400" [ref=e145]:
          - cell "Product Image" [ref=e146]:
            - link "Product Image" [ref=e147] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=e148]
          - cell "Lace Top For Women Women > Tops" [ref=e149]:
            - heading "Lace Top For Women" [level=4] [ref=e150]:
              - link "Lace Top For Women" [ref=e151] [cursor=pointer]:
                - /url: /product_details/42
            - paragraph [ref=e152]: Women > Tops
          - cell "Rs. 1400" [ref=e153]:
            - paragraph [ref=e154]: Rs. 1400
          - cell "1" [ref=e155]:
            - button "1" [ref=e156] [cursor=pointer]
          - cell "Rs. 1400" [ref=e157]:
            - paragraph [ref=e158]: Rs. 1400
        - row "Total Amount Rs. 9444" [ref=e159]:
          - cell [ref=e160]
          - cell [ref=e161]
          - cell "Total Amount" [ref=e162]:
            - heading "Total Amount" [level=4] [ref=e163]
          - cell "Rs. 9444" [ref=e164]:
            - paragraph [ref=e165]: Rs. 9444
    - generic [ref=e166]:
      - generic [ref=e167]: If you would like to add a comment about your order, please write it in the field below.
      - textbox [ref=e168]
    - link "Place Order" [ref=e170] [cursor=pointer]:
      - /url: /payment
  - contentinfo [ref=e171]:
    - generic [ref=e176]:
      - heading "Subscription" [level=2] [ref=e177]
      - generic [ref=e178]:
        - textbox "Your email address" [ref=e179]
        - button "" [ref=e180] [cursor=pointer]:
          - generic [ref=e181]: 
        - paragraph [ref=e182]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e186]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1   | const {test,expect} = require("../../fixtures/fixture");
  2   | const paymentData = require("../../test-data/paymentData.json");
  3   | const products = require("../../test-data/productData.json");
  4   | 
  5   | test('@regression @checkout should complete checkout for single product', async({navigate, homePage, productPage, cartPage, checkoutPage})=>{
  6   | 
  7   |     await homePage.goToProducts();
  8   | 
  9   |     await expect(productPage.getProductCard(products.singleProduct.name)).toBeVisible();
  10  | 
  11  |     const productPagePrice = await productPage.getProductPrice(products.singleProduct.name);
  12  | 
  13  |     await productPage.clickOnAddToCart(products.singleProduct.name);
  14  | 
  15  |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  16  |     await cartPage.clickOnViewCart();
  17  | 
  18  |     await expect(cartPage.getCartItem(products.singleProduct.name)).toBeVisible();
  19  |     const cartPagePrice = await cartPage.getProductPrice(products.singleProduct.name)
  20  |     await expect(cartPagePrice).toBe(productPagePrice);
  21  | 
  22  |     await cartPage.clickOnCheckOut();
  23  | 
  24  |     const checkoutPrice = await checkoutPage.getProductPrice(products.singleProduct.name);
  25  |     await expect (checkoutPrice).toEqual(productPagePrice);
  26  | 
  27  |     await checkoutPage.clickOnPlaceOrder();
  28  | 
  29  |     await checkoutPage.addPaymentDetails(
  30  |         paymentData.validMasterCard.cardHolderName,
  31  |         paymentData.validMasterCard.cardNumber,
  32  |         paymentData.validMasterCard.cvv,
  33  |         paymentData.validMasterCard.month,
  34  |         paymentData.validMasterCard.year);
  35  | 
  36  |     await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();
  37  | 
  38  | })
  39  | 
  40  | 
  41  | test("@checkout @regression should able to checkout multiple products correctly", async ({navigate, homePage, productPage, cartPage, checkoutPage }) => {
  42  | 
  43  |     //productPage
  44  |     const productData = [];
  45  |     await homePage.goToProducts();
  46  | 
  47  |     // Reading price and name from product page and continue shopping until last product and then click on add to cart 
  48  |     for (let i = 0; i < products.multipleProducts.length; i++) {
  49  | 
  50  |         const name = products.multipleProducts[i].name;
  51  |         const price = await productPage.getProductPrice(products.multipleProducts[i].name);
  52  | 
  53  |          productData.push({name, price});
  54  | 
  55  |         await productPage.clickOnAddToCart(products.multipleProducts[i].name);
  56  | 
  57  |         if (i != products.multipleProducts.length - 1) {
  58  |             await cartPage.clickOnContinueShopping();
  59  |         }
  60  |         else {
  61  |             await cartPage.clickOnViewCart();
  62  |         }
  63  |     }
  64  | 
  65  |     //Checking all products are present in cart page
  66  |     for (const product of products.multipleProducts) {
  67  |         await expect(cartPage.getCartItem(product.name)).toBeVisible();
  68  |     }
  69  | 
  70  |     await cartPage.clickOnCheckOut();
  71  | 
  72  |     let totalActualAmount = 0 ; 
  73  |     //checking Indvidual price of product at checkout is equal to product page and calculating total sum of of product price
  74  |     for (const item of productData){
  75  |         const checkoutPrice = await checkoutPage.getProductPrice(item.name);
  76  |         await expect (checkoutPrice).toEqual(item.price);
  77  |          const totalProductPrice = await checkoutPage.getProductTotalPrice(item.name);
  78  |         totalActualAmount = totalActualAmount + totalProductPrice;
  79  |      }
  80  | 
  81  |     const totalExpectedAmount = await checkoutPage.getProductsTotalAmount();
  82  | 
> 83  |     await expect (totalActualAmount, "Mismatch in final total amount").toBe(totalExpectedAmount);
      |                                                                        ^ Error: Mismatch in final total amount
  84  | 
  85  |     await checkoutPage.clickOnPlaceOrder();
  86  | 
  87  |     await checkoutPage.addPaymentDetails(
  88  |         paymentData.validMasterCard.cardHolderName,
  89  |         paymentData.validMasterCard.cardNumber,
  90  |         paymentData.validMasterCard.cvv,
  91  |         paymentData.validMasterCard.month,
  92  |         paymentData.validMasterCard.year);
  93  | 
  94  |     await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();
  95  | })
  96  | 
  97  | test('@regression @checkout checkout displayed product price as per quantity wise', async({navigate,homePage, productPage, checkoutPage, cartPage})=>{
  98  | 
  99  |     await homePage.goToProducts();
  100 | 
  101 |     await expect(productPage.getProductCard(products.secondProduct.name)).toBeVisible();
  102 | 
  103 |     const productPagePrice = await productPage.getProductPrice(products.secondProduct.name);
  104 | 
  105 |     await productPage.clickOnProductDetails(products.secondProduct.name);
  106 |     
  107 |     await productPage.updateProductQuantity("5");
  108 | 
  109 |     await productPage.clickOnAddToCartFromDetailPage();
  110 | 
  111 |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  112 |     await cartPage.clickOnViewCart();
  113 | 
  114 |     await expect(cartPage.getCartItem(products.secondProduct.name)).toBeVisible();
  115 |     
  116 |     const cartProductPrice = await cartPage.getProductPrice(products.secondProduct.name)
  117 |     await expect(cartProductPrice).toEqual(productPagePrice);
  118 | 
  119 |     await cartPage.clickOnCheckOut();
  120 | 
  121 |     await expect (checkoutPage.getCheckoutItem(products.secondProduct.name)).toBeVisible();
  122 |     const quantity = await checkoutPage.getProductQuantity(products.secondProduct.name);
  123 | 
  124 |     await expect(quantity).toBe(5);
  125 | 
  126 |     const checkoutPrice = await checkoutPage.getProductPrice(products.secondProduct.name);
  127 |     await expect(checkoutPrice).toBe(productPagePrice);
  128 | 
  129 |     const expectedTotalProductPrice = checkoutPrice * quantity;
  130 |     const actualTotalProductPrice = await checkoutPage.getProductTotalPrice(products.secondProduct.name);
  131 | 
  132 |     await expect(actualTotalProductPrice).toBe(expectedTotalProductPrice);
  133 | 
  134 |     await checkoutPage.clickOnPlaceOrder();
  135 | 
  136 |     await checkoutPage.addPaymentDetails(
  137 |         paymentData.validMasterCard.cardHolderName,
  138 |         paymentData.validMasterCard.cardNumber,
  139 |         paymentData.validMasterCard.cvv,
  140 |         paymentData.validMasterCard.month,
  141 |         paymentData.validMasterCard.year);
  142 | 
  143 |     await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();
  144 |     
  145 | 
  146 | })
  147 | 
  148 | 
  149 | 
  150 | 
```