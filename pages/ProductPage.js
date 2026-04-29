class ProductPage {

    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.productsTitle = page.getByText("ALL PRODUCTS");
        this.searchProductTitle = page.getByRole('heading', { name: "Searched Products" });
        this.inpSearchBox = page.getByPlaceholder('Search Product');
        this.btnSubmitSearch = page.locator("#submit_search");
        this.allProductsCard = page.locator(".product-image-wrapper");

        //product detail page locators 
        this.productName = page.locator(".product-information h2");
        this.priceProductDetail = page.getByText('Rs.');
        this.addToCartProductDetail = page.getByRole("button", { name: 'Add to cart' });
        this.quantityInp = page.locator('#quantity');
        this.availiblityStatus = page.getByText("Availability");
    }

    getProductsTitle() {
        return this.productsTitle;
    }

    getSearchProductsTitle() {
        return this.searchProductTitle;
    }

    async searchProduct(productName) {
        await this.inpSearchBox.fill(productName);

        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.btnSubmitSearch.click()
        ]);
    }

    getProductCard(productName) {
        return this.allProductsCard.filter({
            has: this.page.locator('.productinfo p'), hasText: productName
        });
    }

    async clickOnProductDetails(productName) {
        const product = this.getProductCard(productName);
        await product.locator("a[href*='product_details']").click();
    }

    async clickOnAddToCart(productName) {
        const product = this.getProductCard(productName);

        //Hover on product 
        await product.hover();

        //click on add to cart for overlay content
        await product.locator(".overlay-content a").click();
    }

    async getProductPrice(productName) {
        const product = this.getProductCard(productName);

        //Hover on product 
        await product.hover();

        //click on add to cart for overlay content
        const price = await product.locator(".overlay-content h2").textContent();
        return Number(price.replace(/[^\d]/g, ''));
    }

    //Product details method 
    getProductName() {
        return this.productName;
    }

    async getProductPriceFromDetailPage() {
        const price = await this.priceProductDetail.textContent();

        return Number(price.replace(/[^\d]/g, ''));
    }

    async getProductAvailiblityStatus() {
        await this.availiblityStatus().inner
    }

    async updateProductQuantity(quntity){
        await this.quantityInp.fill(quntity);
    }

    async clickOnAddToCartFromDetailPage() {
        await this.addToCartProductDetail.click();
    }


}
module.exports = { ProductPage };