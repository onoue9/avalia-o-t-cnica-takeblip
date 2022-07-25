const { RequestService } = require('../service/RequestService');

class RequestController {
    constructor(requestService = new RequestService()) {
        this.requestService = requestService;
    }

    async getByIdTheCSharpRepository(req, res) {
        const { id } = req.params;
        const response = await this.requestService.getByIdTheCSharpRepository(id);
        return res.status(200).json(response);
    }
}

module.exports = { RequestController };
