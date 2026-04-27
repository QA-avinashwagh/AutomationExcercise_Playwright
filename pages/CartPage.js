class CartPage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;

        //modal 
        this.cartModal = page.locator(".modal-content");
        this.viewCartLink = this.cartModal.getByRole("link", { name: 'View Cart' })
        this.continueShoppingBtn = this.cartModal.getByRole("button", { name: 'Continue Shopping' });

        this.proccedToCheckoutBtn = page.getByText('Proceed To Checkout');

        this.allCartProductInfo = page.locator("#cart_info tbody tr");
    }

    getProductAddedToCartMsg() {
        return this.cartModal.filter('p').first();
    }

    async clickOnViewCart() {
        await this.viewCartLink.click();
    }

    async clickOnContinueShopping() {
        await this.continueShoppingBtn.click();
    }

    async clickOnCheckOut() {
        await this.proccedToCheckoutBtn.click();
    }

    getCartItem(productName) {
        return this.allCartProductInfo.filter({
            has: this.page.locator('td', { hasText: productName })});
    }

    async isProductInCart(productName) {
        return await this.getCartItem(productName).isVisible();
    }

    async getProductQuantity(productName) {
        return await this.getCartItem(productName)
            .locator('.cart_quantity button')
            .textContent();
    }

    async getProductPrice(productName) {
        const price = await this.getCartItem(productName)
            .locator('.cart_price')
            .textContent();

        return Number(price.replace(/[^\d]/g, ''));
    }

    async getProductTotalPrice(productName) {
        return await this.getCartItem(productName)
            .locator('.cart_total_price')
            .textContent();
    }

    async removeProductFromCart(productName) {
        await this.getCartItem(productName).locator('.cart_quantity_delete').click();
    }

}
module.exports={CartPage};