const {SEARCH_TWEET_QUERY_ENUM} = require('./enums.js');

const {updateCryptoPrices} = require('./crypto.js');
const {retweet, updateTweetStatus, replyToTweet} = require('./twitter.js');

const initBot = () => {
    updateTweetStatus("Starting Bot in Heroku!");
    
    // updateTweetStatus("The bot is still alive !!");
    setInterval(updateTweetStatus, 43200000, "This Bot is still ALIVE !"); // every 12 hours

    // updateCryptoPrices();
    setInterval(updateCryptoPrices, 3600000); // every 60 minutes
    
    // retweet(SEARCH_TWEET_QUERY_ENUM.CRYPTO);
    setInterval(retweet, 5400000, SEARCH_TWEET_QUERY_ENUM.LIVE_SPORT); // every 90 minutes
    
    // replyToTweet(SEARCH_TWEET_QUERY_ENUM.CRYPTO);
    setInterval(replyToTweet, 7200000, SEARCH_TWEET_QUERY_ENUM.LIVE_SPORT); // every 120 minutes
}

initBot();
