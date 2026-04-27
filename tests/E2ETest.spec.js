const { test, expect } = require("../fixtures/fixture");
const paymentData = require("../test-data/paymentData.json");
const products = require("../test-data/productData.json");


test('@Regression E2E test ', async ({ navigate, homePage, productPage, cartPage, checkoutPage }) => {

    //productPage
    await homePage.goToProducts();
    await expect(productPage.getProductCard(products.singleProduct.name)).toBeVisible();

    const productPagePrice = await productPage.getProductPrice(products.singleProduct.name);
    console.log("Product price on Product page : ", productPagePrice);

    await productPage.clickOnAddToCart(products.singleProduct.name);
    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    //cartpage
    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(products.singleProduct.name)).toBeVisible();

    const productCartPrice = await cartPage.getProductPrice(products.singleProduct.name);
    console.log("Product price on cart page : ", productCartPrice);

    expect(productPagePrice).toEqual(productCartPrice);

    //checkoutPage
    await cartPage.clickOnCheckOut();
    const checkoutProdcutPrice = await checkoutPage.getProductPrice(products.singleProduct.name);
    console.log("Product price on checkout page:", checkoutProdcutPrice);

    expect(productPagePrice).toEqual(checkoutProdcutPrice);

    await checkoutPage.clickOnPlaceOrder();

    await checkoutPage.addPaymentDetails(
        paymentData.validVisaCard.cardHolderName,
        paymentData.validVisaCard.cardNumber,
        paymentData.validMasterCard.cvv,
        paymentData.validMasterCard.month,
        paymentData.validMasterCard.year);

    await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();

})


test('@Regression should complete order after adding two products and removing one', async ({ navigate, homePage, productPage, cartPage, checkoutPage }) => {

    //productPage - check atleast one product displayed
    await homePage.goToProducts();
    await expect(productPage.getProductCard(products.singleProduct.name)).toBeVisible();

    const product1Price = await productPage.getProductPrice(products.multipleProducts[1].name);
    await productPage.clickOnAddToCart(products.multipleProducts[1].name);
    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
    await cartPage.clickOnContinueShopping();

    const product2Price = await productPage.getProductPrice(products.multipleProducts[3].name);
    await productPage.clickOnAddToCart(products.multipleProducts[3].name);
    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(products.multipleProducts[1].name)).toBeVisible();
    await expect(cartPage.getCartItem(products.multipleProducts[3].name)).toBeVisible();

    await cartPage.removeProductFromCart(products.multipleProducts[1].name);

    await expect(cartPage.getCartItem(products.multipleProducts[1].name)).toHaveCount(0);

    const product1CartPrice = await cartPage.getProductPrice(products.multipleProducts[3].name);
    console.log("Product price on cart page : ", product1CartPrice);

    await expect(product2Price).toEqual(product1CartPrice);

    //checkoutPage
    await cartPage.clickOnCheckOut();
    const checkoutPrice = await checkoutPage.getProductPrice(products.multipleProducts[3].name);
    console.log("product price on checkout page:", checkoutPrice);

    expect(product2Price).toEqual(checkoutPrice);

    await checkoutPage.clickOnPlaceOrder();

    await checkoutPage.addPaymentDetails(
        paymentData.validMasterCard.cardHolderName,
        paymentData.validMasterCard.cardNumber,
        paymentData.validMasterCard.cvv,
        paymentData.validMasterCard.month,
        paymentData.validMasterCard.year);

    await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();

})



