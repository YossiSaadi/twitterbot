const {GET_TWEET_INFO_BY_PARAMETER_ENUM, GET_GIF_INFO_BY_PARAMETER_ENUM, SEARCH_TWEET_QUERY_ENUM} = require('./enums.js');

const {updateCryptoPrices} = require('./crypto.js');
const {retweet, updateTweetStatus, replyToTweet} = require('./twitter.js');

const initBot = () => {
    updateCryptoPrices();
    // setInterval(updateCryptoPrices, 1800000); // every 30 minutes

    updateTweetStatus("Test!");
    // setInterval(updateTweetStatus, 3600000, "This Bot is still ALIVE !"); // every 60 minutes
    
    retweet(SEARCH_TWEET_QUERY_ENUM.CRYPTO);
    // setInterval(retweet, 1200000, SEARCH_TWEET_QUERY_ENUM.LIVE_SPORT); // every 15 minutes
    
    replyToTweet(SEARCH_TWEET_QUERY_ENUM.CRYPTO);
}

initBot();