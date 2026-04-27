class LoginPage {


    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.inpEmail = page.locator(".login-form").getByPlaceholder('Email Address');
        this.inpPassword = page.getByPlaceholder('Password');
        this.btnLogin = page.getByRole('button', { name: 'Login' });
        this.getErrorMsg = page.getByText('Your email or password is incorrect!');
    }

    async navigate() {
        await this.page.goto('/login');
    }

    async login(userEmail, password) {
        await this.inpEmail.first().fill(userEmail);
        await this.inpPassword.fill(password);

        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.btnLogin.click()
        ]);
    }

    getErrorMsgOnLogin() {
        return this.getErrorMsg;
    }



}
module.exports={LoginPage};