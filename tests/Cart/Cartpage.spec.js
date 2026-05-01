const { test, expect } = require("../../fixtures/fixture");
const productData = require("../../test-data/productData.json");

test.beforeEach(async({navigate, homePage, cartPage})=>{

    await homePage.goToCartPage();
    await cartPage.ensureCartIsEmpty();
})


test('@regression @cart should displayed message when there is no product', async ({ navigate, homePage, productPage, cartPage }) => {

    await homePage.goToCartPage();

    const emptyCartMsg = cartPage.getEmptyCartMsg();

    await expect(emptyCartMsg).toBeVisible();

    await expect(emptyCartMsg).toHaveText("Cart is empty! Click here to buy products.")

    await expect(cartPage.isProductLinkDisplayedOnEmptyCart()).toBeVisible();

})


test('@regression @cart Added product to cart should be displayed with correct Quantity', async ({ navigate, homePage, productPage, cartPage }) => {

    await homePage.goToProducts();

    await productPage.clickOnAddToCart(productData.singleProduct.name);

    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();
    const quantity = await cartPage.getProductQuantity(productData.singleProduct.name);
    await expect(quantity).toBe(1);

})

test('@cart @regression should allow setting quantity before adding to cart', async ({ navigate, homePage, productPage, cartPage }) => {

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


test('@regression @cart should remove one product when multiple products are in cart', async ({ navigate, homePage, productPage, cartPage }) => {

    await homePage.goToProducts();

    await productPage.clickOnAddToCart(productData.singleProduct.name);
    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
    await cartPage.clickOnContinueShopping();
    await productPage.clickOnAddToCart(productData.secondProduct.name);
    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();
    await expect(cartPage.getCartItem(productData.secondProduct.name)).toBeVisible();

    await cartPage.removeProductFromCart(productData.secondProduct.name);

    await expect(cartPage.getCartItem(productData.secondProduct.name)).toHaveCount(0);
    await expect(cartPage.getCartItem(productData.singleProduct.name)).toHaveCount(1);

})

