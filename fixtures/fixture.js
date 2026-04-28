const{test:base, expect} =require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { HomePage } = require("../pages/HomePage");
const { ProductPage} = require("../pages/ProductPage");
const { CartPage } = require("../pages/CartPage");
const { CheckoutPage } = require("../pages/CheckoutPage");
const { RegisterPage } = require("../pages/RegisterPage");
const userData = require("../test-data/userData.json")

exports.test = base.extend({

    loginPage : async({page}, use)=>{
        await use(new LoginPage(page));
    }, 

    homePage : async({page}, use)=>{
        await use(new HomePage(page));
    }, 

    registerPage : async({page},use)=>{
        await use(new RegisterPage(page));
    },

    productPage : async({page}, use)=>{
        await use(new ProductPage(page));
    }, 

    cartPage : async ({page}, use) => {
        await use(new CartPage(page));
        
    }, 
    
    checkoutPage : async ({page}, use) => {
        await use(new CheckoutPage(page));
    }, 

    loggedInPage : async({page, loginPage}, use) =>{
        await loginPage.navigate();
        await loginPage.login(userData.validUser1.email, userData.validUser1.password);
        await use(page);
    }, 
    
    navigate : async({page}, use)=>{
        await page.goto('/');
        await use(page);
    } 

})
exports.expect= expect;
