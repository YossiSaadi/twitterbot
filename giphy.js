const {GIPHY} = require('./entities.js');
const {GET_TWEET_INFO_BY_PARAMETER_ENUM, GET_GIF_INFO_BY_PARAMETER_ENUM, SEARCH_TWEET_QUERY_ENUM} = require('./enums.js');

const PARAMS_GIPHY_SEARCH = {
    tag: 'Sport'
}

const getGif = async(byParameter) => {
    try {
        const respone = await GIPHY.random(PARAMS_GIPHY_SEARCH);
        return await respone[byParameter];
    } catch (err) {
        return null;
    }
}

module.exports = {
    getGif
}