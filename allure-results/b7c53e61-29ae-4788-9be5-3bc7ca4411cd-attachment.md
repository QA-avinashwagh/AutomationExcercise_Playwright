# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout\CheckoutPage.spec.js >> @checkout @regression should able to checkout multiple products correctly
- Location: tests\Checkout\CheckoutPage.spec.js:41:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#cart_info tbody tr').filter({ has: locator('.cart_description a').filter({ hasText: 'Fancy Green Top' }) }).locator('.cart_price p')

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
        - row "Total Amount Rs. 0" [ref=e89]:
          - cell [ref=e90]
          - cell [ref=e91]
          - cell "Total Amount" [ref=e92]:
            - heading "Total Amount" [level=4] [ref=e93]
          - cell "Rs. 0" [ref=e94]:
            - paragraph [ref=e95]: Rs. 0
    - generic [ref=e96]:
      - generic [ref=e97]: If you would like to add a comment about your order, please write it in the field below.
      - textbox [ref=e98]
    - link "Place Order" [ref=e100] [cursor=pointer]:
      - /url: /payment
  - generic:
    - insertion:
      - generic:
        - iframe
  - contentinfo [ref=e101]:
    - generic [ref=e106]:
      - heading "Subscription" [level=2] [ref=e107]
      - generic [ref=e108]:
        - textbox "Your email address" [ref=e109]
        - button "" [ref=e110] [cursor=pointer]:
          - generic [ref=e111]: 
        - paragraph [ref=e112]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e116]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1   | class CheckoutPage {
  2   | 
  3   |     /** @param {import('@playwright/test').Page} page */
  4   |     constructor(page) {
  5   | 
  6   |         this.page = page;
  7   |         this.delAndBilAddressTitle = page.locator(".address_title");
  8   | 
  9   |         this.allCheckoutProducts = page.locator('#cart_info tbody tr');
  10  | 
  11  |         this.commentTextBox = page.locator("#ordermsg textarea");
  12  |         this.placeOrderBtn = page.getByText('Place Order');
  13  | 
  14  |         //payment form 
  15  |         this.nameInp = page.locator('[data-qa="name-on-card"]');
  16  |         this.cardNumInp = page.locator('[data-qa="card-number"]');
  17  |         this.cvvInp = page.locator('[data-qa="cvc"]');
  18  |         this.monthInp = page.locator('[data-qa="expiry-month"]');
  19  |         this.yearInp = page.locator('[data-qa="expiry-year"]');
  20  |         this.payAndConfrimBtn = page.getByRole("button", { name: "Pay and Confirm Order" });
  21  | 
  22  |         this.OrderPlacedMsg = page.getByText("Congratulations! Your order has been confirmed!");
  23  |         this.downloadInvoiceBtn = page.getByRole("link", { name: 'Download Invoice' });
  24  |         this.continueBtn = page.getByRole("link", { name: 'Continue' })
  25  |     }
  26  | 
  27  |     getDelvAndBilAddressTitle() {
  28  |         return this.delAndBilAddressTitle;
  29  |     }
  30  | 
  31  |     // get product detauils from checkout :
  32  |     getCheckoutItem(productName){
  33  |         return this.allCheckoutProducts.filter({
  34  |                     has: this.page.locator('.cart_description a', { hasText: productName })});
  35  |     }
  36  | 
  37  |     async getProductPrice(productName){
  38  |         const row =  await this.getCheckoutItem(productName)
> 39  |        const price = await row.locator(".cart_price p").textContent();
      |                                                         ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  40  |         return Number(price.replace(/[^\d]/g, ''));
  41  |     }
  42  |     
  43  |     async getProductQuantity(productName){
  44  |       const qunt = await this.getCheckoutItem(productName)
  45  |             .locator('.cart_quantity button')
  46  |             .textContent();
  47  | 
  48  |          return Number(qunt.trim());
  49  | 
  50  |     }
  51  | 
  52  |     // This method will return total price for the product if there are 4 qt of Rs 100 then it will return 400
  53  |     async getProductTotalPrice(productName){
  54  |         const price =  await this.getCheckoutItem(productName)
  55  |                     .locator(".cart_total_price")
  56  |                     .textContent();
  57  |         return Number(price.replace(/[^\d]/g, ''));
  58  |     }
  59  | 
  60  |     async getProductsTotalAmount() {
  61  |         const price =  await this.allCheckoutProducts
  62  |                     .locator(".cart_total_price")
  63  |                     .last()
  64  |                     .textContent();
  65  |         return Number(price.replace(/[^\d]/g, ''));
  66  |     }
  67  | 
  68  |     async fillCommentOnCheckOut(text) {
  69  |         await this.commentTextBox.fill(text);
  70  |     }
  71  | 
  72  |     async clickOnPlaceOrder() {
  73  |         await Promise.all([
  74  |         this.page.waitForURL('**/payment'),
  75  |         this.placeOrderBtn.click()
  76  |         ]);
  77  |     }
  78  | 
  79  |     async addPaymentDetails(name, cardNumber, cvv, month, year) {
  80  | 
  81  |         await this.nameInp.fill(name);
  82  |         await this.cardNumInp.fill(cardNumber);
  83  |         await this.cvvInp.fill(cvv);
  84  |         await this.monthInp.fill(month);
  85  |         await this.yearInp.fill(year);
  86  |         await this.payAndConfrimBtn.click();
  87  |     }
  88  | 
  89  |     getOrderPlacedMsg() {
  90  |         return this.OrderPlacedMsg;
  91  |     }
  92  | 
  93  |     async clickOnDownloadInvoice() {
  94  |         await this.downloadInvoiceBtn.click();
  95  |     }
  96  | 
  97  |     async clickOnContinueBtn() {
  98  |         await this.continueBtn.click();
  99  |     }
  100 | 
  101 | }
  102 | module.exports={CheckoutPage};
```