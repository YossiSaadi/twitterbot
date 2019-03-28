const {GIPHY} = require('./entities.js');

const getGifUrl = async(byParameter, query) => {
    try {
        const {data} = await GIPHY.random({tag: query});
        return await data[byParameter];
    } catch (err) {
        return null;
    }
}

module.exports = {
    getGifUrl
}