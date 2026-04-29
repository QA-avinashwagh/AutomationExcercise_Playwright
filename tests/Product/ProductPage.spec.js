const { test, expect } = require("../../fixtures/fixture");
const { ProductPage } = require("../../pages/ProductPage");
const products = require("../../test-data/productData.json")


test('@Regression @Product should display product list',
    async ({ navigate, homePage, productPage }) => {

        await homePage.goToProducts();

        const title = productPage.getProductsTitle();
        await expect(title).toBeVisible();
        await expect(title).toContainText("All Products");

        //checking one product is visible atleast 
        await expect(await productPage.getProductCard(productData.singleProduct.name)).toBeVisible();

    });

test('@Smoke @Product Verify valid product search displays correct result'
    , async ({ navigate, homePage, productPage }) => {

        await homePage.goToProducts();

        await productPage.searchProduct(productData.singleProduct.name);

        const title = productPage.getSearchProductsTitle();
        await expect(title).toBeVisible();
        await expect(title).toContainText("Searched Products");

        //checking search product is visible  
        await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();

    })

test('@Regression @Product Verify invalid product name does not display any products',
    async ({ navigate, homePage, productPage }) => {

        await homePage.goToProducts();

        await productPage.searchProduct(productData.invalidProduct.name);

        const title = productPage.getSearchProductsTitle();
        await expect(title).toBeVisible();
        await expect(title).toContainText("Searched Products");

        //checking invalid search product is not visible
        await expect(productPage.getProductCard(productData.invalidProduct.name)).toHaveCount(0);

    })


test('@Regression @Product Add directly from product listing', async ({ navigate, homePage, productPage, cartPage }) => {

    await homePage.goToProducts();

    await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();

    await productPage.clickOnAddToCart(productData.singleProduct.name);

    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    await cartPage.clickOnViewCart();

    await expect(await cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();

})


test('@Regression should open product details page', async ({ navigate, homePage, productPage }) => {

    await homePage.goToProducts();

    //checking one product is visible atleast 
    await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();

    const productPagePrice = productPage.getProductPrice(productData.singleProduct.name);

    await productPage.clickOnProductDetails(productData.singleProduct.name);

    await expect(productPage.getProductName()).toBeVisible();

    await expect(productPage.getProductName()).toHaveText(productData.singleProduct.name);

    await expect(productPage.getProductPriceFromDetailPage()).toEqual(productPagePrice);

})

test('@product should allow setting quantity before adding to cart', async ({ navigate, homePage, productPage, cartPage }) => {

    await homePage.goToProducts();

    //checking one product is visible atleast 
    await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();

    await productPage.clickOnProductDetails(productData.singleProduct.name);

    await expect(productPage.getProductName()).toBeVisible();
    await expect(await productPage.getProductName()).toHaveText(productData.singleProduct.name);

    await productPage.updateProductQuantity("4");
    await productPage.clickOnAddToCartFromDetailPage();

    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    await cartPage.clickOnViewCart();

    await cartPage.getCartItem(productData.singleProduct.name);
    await expect(await cartPage.getProductQuantity(productData.singleProduct.name)).toEqual(4);
})


test("@Regression should able to add product to cart", async ({ navigate, homePage, productPage, cartPage }) => {

    await homePage.goToProducts();

    //checking one product is visible atleast 
    await expect(productPage.getProductCard(productData.singleProduct.name)).toBeVisible();

    const productPagePrice = await productPage.getProductPrice(productData.singleProduct.name);

    await productPage.clickOnProductDetails(productData.singleProduct.name);

    await expect(productPage.getProductName()).toBeVisible();

    await expect(await productPage.getProductName()).toHaveText(productData.singleProduct.name);

    await expect(await productPage.getProductPriceFromDetailPage()).toEqual(productPagePrice);

    await productPage.clickOnAddToCartFromDetailPage();

    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
})




