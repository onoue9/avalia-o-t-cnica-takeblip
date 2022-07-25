const { RequestService } = require('../service/RequestService');

class RequestController {
    constructor(requestService = new RequestService()) {
        this.requestService = requestService;
    }

    async getTheFiveOldestCSharpRepositories(_req, res) {
        const response = await this.requestService.getTheFiveOldestCSharpRepositories();
        return res.status(200).json(response);
    }
}

module.exports = { RequestController };
