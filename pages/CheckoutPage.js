class CheckoutPage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {

        this.page = page;
        this.delAndBilAddressTitle = page.locator(".address_title");

        this.allCheckoutProducts = page.locator('#cart_info tbody tr');

        this.commentTextBox = page.locator("#ordermsg textarea");
        this.placeOrderBtn = page.getByText('Place Order');

        //payment form 
        this.nameInp = page.locator('[data-qa="name-on-card"]');
        this.cardNumInp = page.locator('[data-qa="card-number"]');
        this.cvvInp = page.locator('[data-qa="cvc"]');
        this.monthInp = page.locator('[data-qa="expiry-month"]');
        this.yearInp = page.locator('[data-qa="expiry-year"]');
        this.payAndConfrimBtn = page.getByRole("button", { name: "Pay and Confirm Order" });

        this.OrderPlacedMsg = page.getByText("Congratulations! Your order has been confirmed!");
        this.downloadInvoiceBtn = page.getByRole("link", { name: 'Download Invoice' });
        this.continueBtn = page.getByRole("link", { name: 'Continue' })
    }

    getDelvAndBilAddressTitle() {
        return this.delAndBilAddressTitle;
    }

    // get product detauils from checkout :
    getCheckoutItem(productName){
        return this.allCheckoutProducts.filter({
                    has: this.page.locator('.cart_description a', { hasText: productName })});
    }

    async getProductPrice(productName){
        const row =  await this.getCheckoutItem(productName)
       const price = await row.locator(".cart_price p").textContent();
        return Number(price.replace(/[^\d]/g, ''));
    }
    
    async getProductQuantity(productName){
      const qunt = await this.getCheckoutItem(productName)
            .locator('.cart_quantity button')
            .textContent();

         return Number(qunt.trim());

    }

    // This method will return total price for the product if there are 4 qt of Rs 100 then it will return 400
    async getProductTotalPrice(productName){
        const price =  await this.getCheckoutItem(productName)
                    .locator(".cart_total_price")
                    .textContent();
        return Number(price.replace(/[^\d]/g, ''));
    }

    async getProductsTotalAmount() {
        const price =  await this.allCheckoutProducts
                    .locator(".cart_total_price")
                    .last()
                    .textContent();
        return Number(price.replace(/[^\d]/g, ''));
    }

    async fillCommentOnCheckOut(text) {
        await this.commentTextBox.fill(text);
    }

    async clickOnPlaceOrder() {
        await Promise.all([
        this.page.waitForURL('**/payment'),
        this.placeOrderBtn.click()
        ]);
    }

    async addPaymentDetails(name, cardNumber, cvv, month, year) {

        await this.nameInp.fill(name);
        await this.cardNumInp.fill(cardNumber);
        await this.cvvInp.fill(cvv);
        await this.monthInp.fill(month);
        await this.yearInp.fill(year);
        await this.payAndConfrimBtn.click();
    }

    getOrderPlacedMsg() {
        return this.OrderPlacedMsg;
    }

    async clickOnDownloadInvoice() {
        await this.downloadInvoiceBtn.click();
    }

    async clickOnContinueBtn() {
        await this.continueBtn.click();
    }

}
module.exports={CheckoutPage};