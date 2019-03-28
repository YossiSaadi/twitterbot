const {twit, giphy, coinmarketcap, TWITTER_API_KEYS, GIPHY_API_KEYS, CMC_API_KEYS} = require('./requires.js');

module.exports = {
    TWITTER: new twit(TWITTER_API_KEYS),
    GIPHY: new giphy(GIPHY_API_KEYS),
    CMC: new coinmarketcap(CMC_API_KEYS)
}