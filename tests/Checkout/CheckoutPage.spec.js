const {test,expect} = require("../../fixtures/fixture");
const paymentData = require("../../test-data/paymentData.json");
const products = require("../../test-data/productData.json");

test.beforeEach(async({navigate, homePage, cartPage})=>{

    await homePage.goToCartPage();
    await cartPage.ensureCartIsEmpty();
})


test('@regression @checkout should complete checkout for single product', async({navigate, homePage, productPage, cartPage, checkoutPage})=>{

    await homePage.goToProducts();

    await expect(productPage.getProductCard(products.singleProduct.name)).toBeVisible();

    const productPagePrice = await productPage.getProductPrice(products.singleProduct.name);

    await productPage.clickOnAddToCart(products.singleProduct.name);

    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(products.singleProduct.name)).toBeVisible();
    const cartPagePrice = await cartPage.getProductPrice(products.singleProduct.name)
    await expect(cartPagePrice).toBe(productPagePrice);

    await cartPage.clickOnCheckOut();

    const checkoutPrice = await checkoutPage.getProductPrice(products.singleProduct.name);
    await expect (checkoutPrice).toEqual(productPagePrice);

    await checkoutPage.clickOnPlaceOrder();

    await checkoutPage.addPaymentDetails(
        paymentData.validMasterCard.cardHolderName,
        paymentData.validMasterCard.cardNumber,
        paymentData.validMasterCard.cvv,
        paymentData.validMasterCard.month,
        paymentData.validMasterCard.year);

    await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();

})


test("@checkout @regression should able to checkout multiple products correctly", async ({navigate, homePage, productPage, cartPage, checkoutPage }) => {

    //productPage
    const productData = [];
    await homePage.goToProducts();

    // Reading price and name from product page and continue shopping until last product and then click on add to cart 
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

    //Checking all products are present in cart page
    for (const product of products.multipleProducts) {
        await expect(cartPage.getCartItem(product.name)).toBeVisible();
    }

    await cartPage.clickOnCheckOut();

    let totalActualAmount = 0 ; 
    //checking Indvidual price of product at checkout is equal to product page and calculating total sum of of product price
    for (const item of productData){
        const checkoutPrice = await checkoutPage.getProductPrice(item.name);
        await expect (checkoutPrice).toEqual(item.price);
         const totalProductPrice = await checkoutPage.getProductTotalPrice(item.name);
        totalActualAmount = totalActualAmount + totalProductPrice;
     }

    const totalExpectedAmount = await checkoutPage.getProductsTotalAmount();

    await expect (totalActualAmount, "Mismatch in final total amount").toBe(totalExpectedAmount);

    await checkoutPage.clickOnPlaceOrder();

    await checkoutPage.addPaymentDetails(
        paymentData.validMasterCard.cardHolderName,
        paymentData.validMasterCard.cardNumber,
        paymentData.validMasterCard.cvv,
        paymentData.validMasterCard.month,
        paymentData.validMasterCard.year);

    await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();
})

test('@regression @checkout checkout displayed product price as per quantity wise', async({navigate,homePage, productPage, checkoutPage, cartPage})=>{

    await homePage.goToProducts();

    await expect(productPage.getProductCard(products.secondProduct.name)).toBeVisible();

    const productPagePrice = await productPage.getProductPrice(products.secondProduct.name);

    await productPage.clickOnProductDetails(products.secondProduct.name);
    
    await productPage.updateProductQuantity("5");

    await productPage.clickOnAddToCartFromDetailPage();

    await expect(cartPage.getProductAddedToCartMsg()).toContainText("Your product has been added to cart.");
    await cartPage.clickOnViewCart();

    await expect(cartPage.getCartItem(products.secondProduct.name)).toBeVisible();
    
    const cartProductPrice = await cartPage.getProductPrice(products.secondProduct.name)
    await expect(cartProductPrice).toEqual(productPagePrice);

    await cartPage.clickOnCheckOut();

    await expect (checkoutPage.getCheckoutItem(products.secondProduct.name)).toBeVisible();
    const quantity = await checkoutPage.getProductQuantity(products.secondProduct.name);

    await expect(quantity).toBe(5);

    const checkoutPrice = await checkoutPage.getProductPrice(products.secondProduct.name);
    await expect(checkoutPrice).toBe(productPagePrice);

    const expectedTotalProductPrice = checkoutPrice * quantity;
    const actualTotalProductPrice = await checkoutPage.getProductTotalPrice(products.secondProduct.name);

    await expect(actualTotalProductPrice).toBe(expectedTotalProductPrice);

    await checkoutPage.clickOnPlaceOrder();

    await checkoutPage.addPaymentDetails(
        paymentData.validMasterCard.cardHolderName,
        paymentData.validMasterCard.cardNumber,
        paymentData.validMasterCard.cvv,
        paymentData.validMasterCard.month,
        paymentData.validMasterCard.year);

    await expect(checkoutPage.getOrderPlacedMsg()).toBeVisible();
    

})



