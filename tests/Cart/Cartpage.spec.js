const { test, expect } = require("../../fixtures/fixture");
const productData = require("../../test-data/productData.json");


test('@Regression @Cart should displayed message when there is no product', async ({ navigate, homePage, productPage, cartPage }) => {

    await homePage.goToCartPage();

    const emptyCartMsg = cartPage.getEmptyCartMsg();

    await expect(emptyCartMsg).toBeVisible();

    await expect(emptyCartMsg).toHaveText("Cart is empty! Click here to buy products.")

    await expect(cartPage.isProductLinkDisplayedOnEmptyCart()).toBeVisible();

})

test('@Regression @Cart Added product to cart should be displayed with correct Quantity', async ({ navigate, homePage, productPage, cartPage }) => {

    await homePage.goToProducts();

    await productPage.clickOnAddToCart(productData.singleProduct.name);

    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(productData.singleProduct.name)).toBeVisible();
    const quantity = await cartPage.getProductQuantity(productData.singleProduct.name);
    await expect(quantity).toBe(1);

})


test('@Regression @Cart should remove one product when multiple products are in cart', async ({ navigate, homePage, productPage, cartPage }) => {

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

