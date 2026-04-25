class ProductPage{

     /** @param {import('@playwright/test').Page} page */
    constructor(page){
        this.page = page; 
        this.inpSearchBox = page.getByPlaceholder('Search Product');
        this.btnSubmitSearch = page.locator("#submit_search"); 
        this.allProductsCard = page.locator(".product-image-wrapper");
    }


    async searchProduct(productName){
        await this.inpSearchBox.fill(productName);

        await Promise.all([
        this.page.waitForLoadState('networkidle'),
        this.btnSubmitSearch.click()
    ]);}

    getProductCard(productName){
       return this.allProductsCard.filter({
            has: this.page.locator('.productinfo p'), hasText : productName});
    }

    async clickOnProductDetails(productName){
        const product = this.getProductCard(productName);
        await product.locator("a[href*='product_details']").click();    
    }

    async clickOnAddToCart(productName){
        const product = this.getProductCard(productName);
        
        //Hover on product 
        await product.hover();

        //click on add to cart for overlay content
        await product.locator(".overlay-content a").click(); 
    }

}
module.exports={ProductPage};