const ApiClient = require("./apiClient")

class AuthAPI {

    constructor(apiClient) {
        this.apiClient = apiClient;
    }

    async login(email, password) {

        const response = await this.apiClient.post('/verifyLogin', {
            email,
            password
        });

        const responseBody = await response.json();
        return responseBody;
    }

}

module.exports={AuthAPI};
