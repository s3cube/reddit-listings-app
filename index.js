
const axios = require("axios").default;
const queryString = require("qs");
let apiResponse;

exports.handler = async (event) => {

    let param = {
        grant_type :'client_credentials'
    };
    let params = queryString.stringify(param, {arrayFormat: 'brackets'});

    const getAccessToken = await axios.post("https://www.reddit.com/api/v1/access_token",
    params
    ,{
        headers: { 
            'content-type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json' 
        },
        auth : {
            username: process.env.username,
            password: process.env.password
        }
    });
    
    const access_token = await getAccessToken.data.access_token;

    const fetchTopItems = await axios.get("https://oauth.reddit.com/r/UpliftingNews/top",{
        params:{
            limit:5
        },
        headers:{
            Authorization: `Bearer ${access_token}`
        }
    });

    const newsItems = await fetchTopItems.data.data.children;
    
    const response = {
        statusCode: 200,
        body: newsItems,
    };

    return response;
};
