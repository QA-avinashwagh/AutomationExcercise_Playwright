const {test, expect} = require("@playwright/test");
const {ApiClient} = require("../../utils/api/apiClient");
const {AuthAPI} = require ("../../utils/api/auth.api");
const userData = require ("../../test-data/userData.json");


test('@api should verify login API response', async({request})=>{

    const apiClient = new ApiClient(request);

    const authAPI = new AuthAPI(apiClient);

    const response = await authAPI.login(userData.validUser1.email, userData.validUser1.password);

    expect(response.responseCode).toBe(200);
    expect(response.message).toContain("User exists");

})
