const API_URL = "https://automationexercise.com/api/";
class ApiClient {

    constructor(request) {
        this.context = request;
    }

    async get(endpoint) {

        const response = await this.context.get(endpoint);
        return response;

    }

    async post(endpoint, payload) {

        const response = await this.context.post(`${API_URL}${endpoint}`, {
            form : payload
        });
        return response;
    }
}
module.exports= {ApiClient};