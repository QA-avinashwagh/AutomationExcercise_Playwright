class RegisterPage{

/** @param {import ('@playwright/test').Page} page */
constructor(page){
    this.page = page;
    this.nameInp = page.getByPlaceholder('name');
    this.emailInp = page.locator('signup-form').getByPlaceholder('Email Address');
    this.signupBtn = page.getByRole("button", {name:'Signup'});

    //Title 
    this.mrTitleRad = page.locator('#uniform-id_gender1');
    this.mrstitleRad = page.locator('#uniform-id_gender2');

    this.passwordInp = page.locator('#password');
    //DOB
    this.daySelect = page.locator("#days");
    this.monthSelect = page.locator("#months");
    this.yearSelect = page.locator("#years");
    
    //newsletter
    this.signupLetterChkbox = page.getByLabel("Sign up for our newsletter!");
    this.offerCheckbox = page.getByLabel("Receive special offers from our partners!");

    //Basic User Details 
    this.userFirstName = page.locator("#first_name");
    this.userLastName = page.locator("#last_name");
    this.userCompanyName = page.getByLabel("Company");
    this.address1Inp = page.getByLabel("Address ");
    this.address2Inp = page.getByLabel("Address 2");
    this.countryDrpDown = page.locator("#country");
    this.stateInp = page.getByLabel("State ");
    this.cityInp = page.getByLabel("City ");
    this.zipcodeInp = page.getByLabel("Zipcode ");
    this.mobileInp = page.getByLabel("Mobile Number ");

    this.createAccountBtn = page.getByRole("button", {name:"Create Account"});

    this.createdAccountMsg = page.getByText("Congratulations! Your new account has been successfully created!");
    this.continueBtn = page.getByRole("link", {name:'Continue'});
}

async fillBasicUserDetails(userName, userEmail){
   await this.nameInp.fill(userName);
    await this.emailInp.fill(userEmail);

    await Promise.all([
        this.page.waitForNavigation(),
        this.signupBtn.click()
    ]);
}

async setTitle(title){
    if(title==='Mr.'){
        await this.mrTitleRad.check();
    }else{
        await this.mrstitleRad.check();
    }
}


async setAccountInfo(title,password,day, month, year){
    //Set Title 
    await this.setTitle(title)

    //set password  
    await this.passwordInp.fill(password)
    
    //set DOB 
    await this.daySelect.selectOption(day);
    await this.monthSelect.selectOption(month);
    await this.yearSelect.selectOption(year);

    //checkbox
    await this.signupLetterChkbox.check();
    await this.offerCheckbox.check();

}

async setAddressInformation(firstName,lastName, companyname, address1, address2,
    country, state, city, zipcode, mobilenum){

    await this.userFirstName.fill(firstName);
    await this.userLastName.fill(lastName);
    await this.userCompanyName.fill(companyname);

    //set Address 
    await this.address1Inp.fill(address1);
    await this.address2Inp.fill(address2);
    await this.countryDrpDown.selectOption(country);
    await this.stateInp.fill(state);
    await this.cityInp.fill(city);
    await this.zipcodeInp.fill(zipcode);
    await this.mobileInp.fill(mobilenum)
}

async clickOnCreateAccount(){
    await Promise.all([
        this.page.waitForLoadState('networkidle'),
        this.createAccountBtn.click()
    ]);
}

getAccountCreatedMsg(){
    return this.createdAccountMsg();
}

async clickOnContinueBtn(){
    await this.continueBtn.click();
}

}
module.exports = {RegisterPage};