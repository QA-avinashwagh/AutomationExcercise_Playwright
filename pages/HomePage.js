    class HomePage {

        /** @param {import('@playwright/test').Page} page */
        constructor(page) {
            this.page = page;
            this.userNameOnNavBar = page.locator(".navbar-nav b");
            this.productLink = page.locator(".navbar-nav  [href*='products']");
            this.logOutLink = page.locator("[href*='logout']");
            this.cartLink = page.locator("a[href*='view_cart']").first();
        }

        async goToHomePage(){
            await this.page.goto('/')
        }

        getUserName() {
            return  this.userNameOnNavBar;
        }

        async goToProducts() {
            await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.productLink.click()
         ]);
        }

        async goToCartPage(){
            await Promise.all([
                this.page.waitForURL('**/view_cart'),
                this.cartLink.click()
            ]);
        }

        async clickOnLogout() {
            await this.logOutLink.click();
        }


    }
    module.exports={HomePage};