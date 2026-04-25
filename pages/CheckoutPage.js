class CheckoutPage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {

        this.page = page;
        this.delAndBilAddressTitle = page.locator(".address_title")
        this.totalProductPrice = page.locator('.cart_total_price');
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

    async getTotalPrice() {
        return await this.totalProductPrice.last().textContent();
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