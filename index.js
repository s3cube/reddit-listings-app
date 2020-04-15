
const axios = require("axios").default;


let apiResponse;

exports.handler = async (event) => {

    const apiResponse = await axios.get("https://www.reddit.com/r/UpliftingNews/.json");
    const newsItems = await apiResp.data.data.children;
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(newsItems),
    };

    return response;
};
