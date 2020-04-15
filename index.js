
const axios = require("axios").default;


let apiResponse;

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!!'),
    };

    axios.get("https://www.reddit.com/r/UpliftingNews/.json")
    .then((response, error)=>{
        console.log(response);
        console.log(error);
        apiResponse = response;
    });

    console.log(apiResponse)

    return response;
};
