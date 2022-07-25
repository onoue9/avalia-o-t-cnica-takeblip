const { default: axios } = require("axios");

const GetTakeBlipRepository = async () => { 
    const { data } = await axios.get("https://api.github.com/users/takenet/repos");
    return data.filter(repo => repo.language === "C#");
}

module.exports = { GetTakeBlipRepository };
