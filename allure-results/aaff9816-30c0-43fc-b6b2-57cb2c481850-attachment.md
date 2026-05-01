# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart\Cartpage.spec.js >> @regression @cart should displayed message when there is no product
- Location: tests\Cart\Cartpage.spec.js:11:1

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
    8 × locator resolved to <span id="empty_cart">…</span>
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
    - paragraph [ref=e132]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e133]:
    - iframe [ref=e136]:
      - iframe [ref=f27e1]:
        - generic [active]:
          - generic [ref=f28e1]:
            - generic [ref=f28e2]:
              - generic:
                - img [ref=f28e6] [cursor=pointer]
                - button [ref=f28e8] [cursor=pointer]:
                  - img [ref=f28e9]
            - insertion [ref=f28e16]:
              - generic [ref=f28e17]:
                - link "Click Here" [ref=f28e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=Cs6ZCMlX0aZC_CJSfssUPzJzl0AXIgvjchgH4-8WjoBSMy5yhkEcQASD9tJ6VAWDliuWDqA6gAYviiqAByAEJqAMByAObBKoEhgJP0E5HztsIgvjlpm18smpysoPnr2H5VfrivXYcQR5ZcChpUmPaqsql3kLbgjWpcarEAbuAbNJY1qvhSBPHmmnlaBEZLs9P-0AL7mPmyXH7ZNo_ZWEemZ_IvQjvqkeEvSpeayyRs0PJuSkXcv4lTNYSYFLNh8iyKd8SL--BBNdWZJQZktSUNodVJwf3zkEDAStoTGtrZUw-7JmKcJtqbbUhuBP-rnnrEQI_PosiCAGbZ_8qzhoAoiMBHkr4lMboVTpp0PtywNPTFjwU9sHY3LdpvmwqCQ9D90ec72JLO3O_KojY0c3Bhj4pRXTZZiACg0O8b4AyBEzxvRoQ1SsS1J1AnhkOIdlHwASrxpTdmgXgBAOIBYjKvtVTkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIILwiAYRABGJ8DMgiKgoCAgICACDoNgECAwICAgICogAKoA0i9_cE6WKuE8cfHl5QDgAoBmAsByAsBgAwBogwMKgoKCI7fsQKV4rECqg0CSU7qDRMIv6bxx8eXlAMVlI-sAh1MThla8A0BiA4JsBOaxfQh0BMA2BMN2BQB0BUByhYCCgD4FgGAFwGyFwQYAlAGshgJEgLoWRhNIgEA0BkB2BkB&ae=1&num=1&cid=CAQS6QEABaugfYSIeyXKXJa5pJ_yxggjrsIPxYpYESydDuLWo1sNnmWXvAqIpEfMRHxMI_hBA4OulD7uTj4yST8n9wVa2jTO7wlUA1Beuqn-pScpHTPRSDKugFlGKQm559Q5NzSwEMWQcfdiGdcpGVbIQyvrrP6vP7C5Qkc8MjoCGwadaXHDmKHCDedZMCgc3ubpvy62nVCbtW_dFzZEwkEEwZTgXKc60eH15ykWVYU37LmuUNQbLjOWKXh5qNOlP7PR4GtpLv-69JoKMnKesqruj8fcyEKk_wF8deCOTMlgnsYTotoYkkcMM7eMLRgB&sig=AOD64_32ytyZpx9aXILGxvu751LElxNDLw&client=ca-pub-1677597403311019&dbm_c=AKAmf-AgbdM4DFsMnhalIYU5y3iS4adkT0ZXKYoYpJ9GATVu1Fve4y8cd_vkjg_8iGhmVaPIw0bHygB3a7-ECh6Xe4QZrujwN8NWUkMwonWlOnSd6m7YUmv1GcfcAnyjvWtEqFLkmGIGdwXgFZmCUMr7x9uatc5F8fKOBobE96UnDNSRMS0tvaV0FOEMaIzlFGkq-eshU7V171oUX2PHofTCcdAYfcRQTJvg4yLtNSi4JE4a2LKUX4hte0VblVfU37igXtVOs8OH_1qxiuay-G2OERiw5IF8ug&cry=1&dbm_d=AKAmf-D8BgNY3ZX09a_37ur8aHOCZXOCCzIdwDXK9rHwnCOT15cDgxDAgZUmwzD7Hu186zAKubzn9mKvQJ8MEtBkm6jy8bPmtZ6grQZW-K1GEzhSYuqHb0EEgJWjXb2dZrCa_U7mIhijys6kNV221Jwh1l1EFfSPsjHADMnkJcHdvI-2ITJFHiRRoY9eQZ4c12-HvqSw-C1wbSzw-7HwwMdg5tlXoK6wmfFq0DcDz0y3rsx5g5nztgA_9Dm9T3pwaGplx7T0T16t8adkRu9nhbD2HU6rduvwz_08fAHUyPXUS6lPQwFyR4ZOgrh09ccPGf29EZLJOacSxUjfk2dXmdeIkLnQaIRtmmyh5ivdh9vtpkFlKrtDre-dulEE0Oaqz_0jawDlS2Qj-ySizEUk3bs-oiAUxKJ1fe3FHPt7tXVABWFK5cgfAH82tI0HamAsWxdh4N2_x0OS1biaso6eywCwUbFt4oAIsGhXP4oWNAyyyYBVmKPBDTzAkcMmdzIqiFXxu9oN1qvCLrL5owTC7HTb3EWPjuUFGe16U_vK-_SqrHk4S4P9yE6yg-c5maSlSlTDmQbYTVXiY1JUWRzJGjTNyv9GZMpltqk-QTVy78zUXVkfMGIZWq6YqknlMZy9hvLv2pX05CkeWpZhHTkINxe6nJKx_NSNKAvy0BuIDa9XOADGrwAEnGsKx9HcqpKAqYZCxV3zNvlfBS97TPj5HE1IxrG0lWUAOA&adurl=https://servedby.flashtalking.com/click/7/281072;9753373;5479520;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0jeUuJoAnWpicbz-Bz-Sact&ft_impID=7720AA8D-B623-A0B2-AD78-8D00925C54C8&ft_section=22459426056&g=6695457C941EA2&random=131848.37943379418&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=R726NFXX&mv=display&mv2=display
                  - img "Click Here" [ref=f28e19]
                - link "AdChoices arrow" [ref=f28e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f28e22]
                - link "Privacy Notification" [ref=f28e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f28e25]
                - link "Privacy Notification" [ref=f28e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f28e28]
          - iframe
```

# Test source

```ts
  1  | const { test, expect } = require("../../fixtures/fixture");
  2  | const productData = require("../../test-data/productData.json");
  3  | 
  4  | test.beforeEach(async({homePage, cartPage})=>{
  5  | 
  6  |     homePage.goToCartPage();
  7  |     await cartPage.ensureCartIsEmpty();
  8  | })
  9  | 
  10 | 
  11 | test('@regression @cart should displayed message when there is no product', async ({ navigate, homePage, productPage, cartPage }) => {
  12 | 
  13 |     await homePage.goToCartPage();
  14 | 
  15 |     const emptyCartMsg = cartPage.getEmptyCartMsg();
  16 | 
> 17 |     await expect(emptyCartMsg).toBeVisible();
     |                                ^ Error: expect(locator).toBeVisible() failed
  18 | 
  19 |     await expect(emptyCartMsg).toHaveText("Cart is empty! Click here to buy products.")
  20 | 
  21 |     await expect(cartPage.isProductLinkDisplayedOnEmptyCart()).toBeVisible();
  22 | 
  23 | })
  24 | 
  25 | test('@regression @cart Added product to cart should be displayed with correct Quantity', async ({ navigate, homePage, productPage, cartPage }) => {
  26 | 
  27 |     await homePage.goToProducts();
  28 | 
  29 |     await productPage.clickOnAddToCart(productData.singleProduct.name);
  30 | 
  31 |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  32 | 
  33 |     await cartPage.clickOnViewCart();
  34 | 
  35 |     await expect(cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();
  36 |     const quantity = await cartPage.getProductQuantity(productData.singleProduct.name);
  37 |     await expect(quantity).toBe(1);
  38 | 
  39 | })
  40 | 
  41 | 
  42 | test('@regression @cart should remove one product when multiple products are in cart', async ({ navigate, homePage, productPage, cartPage }) => {
  43 | 
  44 |     await homePage.goToProducts();
  45 | 
  46 |     await productPage.clickOnAddToCart(productData.singleProduct.name);
  47 |     await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
  48 |     await cartPage.clickOnContinueShopping();
  49 |     await productPage.clickOnAddToCart(productData.secondProduct.name);
  50 |     await cartPage.clickOnViewCart();
  51 | 
  52 |     await expect(cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();
  53 |     await expect(cartPage.getCartItem(productData.secondProduct.name)).toBeVisible();
  54 | 
  55 |     await cartPage.removeProductFromCart(productData.secondProduct.name);
  56 | 
  57 |     await expect(cartPage.getCartItem(productData.secondProduct.name)).toHaveCount(0);
  58 |     await expect(cartPage.getCartItem(productData.singleProduct.name)).toHaveCount(1);
  59 | 
  60 | })
  61 | 
  62 | 
```