const { GetTakeBlipRepository } = require('../utils/request/getTakeBlipRepository');

class RequestService {
    async getTheFiveOldestCSharpRepositories() {
        const response = await GetTakeBlipRepository();
        const sortedResponse = response.sort((a,b) => new Date(a.created_at) - new Date(b.created_at));
        
        return sortedResponse;
    }
}

module.exports = { RequestService };
