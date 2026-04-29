const {test,expect} = require("../fixtures/fixture");
const paymentData = require("../test-data/paymentData.json");
const products = require("../test-data/productData.json");

test("@cart should remove product and update cart correctly", async ({
     navigate, homePage, productPage, cartPage, checkoutPage }) => {

    //productPage
    const productData = [];
    await homePage.goToProducts();
    await expect(productPage.getProductCard(products.singleProduct.name)).toBeVisible();

    for (let i = 0; i < products.multipleProducts.length; i++) {

        const name = products.multipleProducts[i].name;
        const price = await productPage.getProductPrice(products.multipleProducts[i].name);

         productData.push({name, price});

        await productPage.clickOnAddToCart(products.multipleProducts[i].name);

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

    for (const item of productData){
        const checkoutPrice = await checkoutPage.getProductPrice(item.name);
        await expect (checkoutPrice).toEqual(item.price);
    }

    await checkoutPage.clickOnPlaceOrder();

    await checkoutPage.addPaymentDetails(
        paymentData.validMasterCard.cardHolderName,
        paymentData.validMasterCard.cardNumber,
        paymentData.validMasterCard.cvv,
        paymentData.validMasterCard.month,
        paymentData.validMasterCard.year);

    await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();


})

