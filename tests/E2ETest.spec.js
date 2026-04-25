const { test, expect } = require("../fixtures/fixture");
const paymentData = require("../test-data/paymentData.json");
const products = require("../test-data/productData.json")


test('@Regression E2E test ', async ({ navigate, homePage, productPage, cartPage, checkoutPage }) => {

    //productPage
    await homePage.goToProducts();
    await expect(productPage.getProductCard(products.singleProduct.name)).toBeVisible();

    await productPage.clickOnAddToCart(products.singleProduct.name);
    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    //cartpage
    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(products.singleProduct.name)).toBeVisible();

    const productPrice = await cartPage.getProductPrice(products.singleProduct.name);
    console.log("Product price : ", productPrice);

    //checkoutPage
    await cartPage.clickOnCheckOut();
    const TotalPrice = await checkoutPage.getTotalPrice();
    console.log("Total price :", TotalPrice);

    expect(productPrice).toEqual(TotalPrice);

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

    await productPage.clickOnAddToCart(products.multipleProducts[1].name);
    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    //cartpage
    await cartPage.clickOnContinueShopping();

    await productPage.clickOnAddToCart(products.multipleProducts[3].name);
    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(products.multipleProducts[1].name)).toBeVisible();
    await expect(cartPage.getCartItem(products.multipleProducts[3].name)).toBeVisible();

    await cartPage.removeProductFromCart(products.multipleProducts[1].name);

    await expect(cartPage.getCartItem(products.multipleProducts[1].name)).toHaveCount(0);

    const productPrice = await cartPage.getProductPrice(products.multipleProducts[3].name);
    console.log("Product price : ", productPrice);

    //checkoutPage
    await cartPage.clickOnCheckOut();
    const TotalPrice = await checkoutPage.getTotalPrice();
    console.log("Total price :", TotalPrice);

    expect(productPrice).toEqual(TotalPrice);

    await checkoutPage.clickOnPlaceOrder();

    await checkoutPage.addPaymentDetails(
        paymentData.validMasterCard.cardHolderName,
        paymentData.validMasterCard.cardNumber,
        paymentData.validMasterCard.cvv,
        paymentData.validMasterCard.month,
        paymentData.validMasterCard.year);

    await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();

})


test("Veirfy user can chekcout multiple products", async ({ navigate, homePage, productPage, cartPage, checkoutPage }) => {


    //productPage
    await homePage.goToProducts();
    await expect(productPage.getProductCard(products.singleProduct.name)).toBeVisible();

    for (let i = 0; i < products.multipleProducts.length; i++) {
        await productPage.clickOnAddToCart(products.multipleProducts[i].name);
        await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");

        if (i != products.multipleProducts.length - 1) {
            await cartPage.clickOnContinueShopping();
        }
        else {
            await cartPage.clickOnViewCart();
        }
    }

    for (const product of products.multipleProducts) {
        await expect(cartPage.getCartItem(product.name)).toBeVisible();
    }

    await cartPage.clickOnCheckOut();
    await checkoutPage.clickOnPlaceOrder();

    await checkoutPage.addPaymentDetails(
        paymentData.validMasterCard.cardHolderName,
        paymentData.validMasterCard.cardNumber,
        paymentData.validMasterCard.cvv,
        paymentData.validMasterCard.month,
        paymentData.validMasterCard.year);

    await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();


})


