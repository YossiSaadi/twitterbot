const twit = require('twit');
const giphy = require('giphy-api');
const coinmarketcap = require('coinmarketcap-api');

const {TWITTER_API_KEYS, GIPHY_API_KEYS, CMC_API_KEYS} = require('./configApiKeys.js');

module.exports = {
    twit,
    giphy,
    coinmarketcap,
    TWITTER_API_KEYS,
    GIPHY_API_KEYS,
    CMC_API_KEYS
}