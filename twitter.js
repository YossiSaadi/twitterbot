const {TWITTER} = require('./entities.js');

// const twit = require('twit');
// const TWITTER = new twit(TWITTER_API_KEYS);

const {ENDPOINT_TWITTER_SEARCH_TWEETS, ENDPOINT_TWITTER_POST_UPDATE_TWEET, ENDPOINT_TWITTER_RETWEET, ENDPOINT_TWITTER_POST_MEDIA} = require('./apiEndpoins.js');
const FS = require('fs');
const {GET_TWEET_INFO_BY_PARAMETER_ENUM} = require('./enums.js');

const searchOnTwitter = (query) => {
    return {
        q: query,
        result_type: 'recent',
        lang: 'en',
        count: 1
    }
}

const uploadImgToTwitter = async(imgPath) => {
    const imgFs = await FS.readFileSync(imgPath, {encoding: 'base64'});
    const {data} = await TWITTER.post(ENDPOINT_TWITTER_POST_MEDIA, {media_data: imgFs});
    const {media_id_string} = await data;
    return [media_id_string];
}

const retweet = async(query) => {
    const id = await getTweetByParameter(GET_TWEET_INFO_BY_PARAMETER_ENUM['BY_ID'], query);
    if (id) {
        try {
            TWITTER.post(ENDPOINT_TWITTER_RETWEET, {id});
            console.log("RETWEETED!");
        } catch (err) {
            console.error("ERROR while retweeting tweet!", err.stack);
        }
    } else {
        console.error("ERROR while searching tweet!");
    }
}

const updateTweetStatus = async(message, mediaUpload = undefined) => {
    const respone = await TWITTER.post(ENDPOINT_TWITTER_POST_UPDATE_TWEET, {
        status : `Update Status Bot:\n${message}`,
        media_ids: mediaUpload
    });
    
    if (respone) {
        console.log(`New Tweet!\n${message}`);
    } else {
        console.error("ERROR while updating tweet!")
    }
}

const getTweetByParameter = async(byParameter, query) => {
    try {
        const {data} = await TWITTER.get(ENDPOINT_TWITTER_SEARCH_TWEETS, searchOnTwitter(query));
        
        const {statuses} = await data;
        const status = await statuses[0];

        if (byParameter !== GET_TWEET_INFO_BY_PARAMETER_ENUM.BY_TWEET_URL) {
            return status[byParameter];
        } else {
            const {entities} = await status;
            const {urls} = await entities;
            const url = await urls[0];
            
            console.log(urls);
        }
    } catch (err) {
        return null;
    }
}

const replyToTweet = async(query) => {
    const url = await getTweetByParameter(GET_TWEET_INFO_BY_PARAMETER_ENUM['BY_TWEET_URL'], query);
    if (url) {
        try {
            // TWITTER.post(ENDPOINT_TWITTER_RETWEET, {id});
            console.log("RETWEETED! ", url);
        } catch (err) {
            console.error("ERROR while retweeting tweet!", err.stack);
        }
    } else {
        console.error("ERROR while searching tweet!");
    }
}

module.exports = {
    uploadImgToTwitter,
    retweet,
    updateTweetStatus,
    getTweetByParameter,
    replyToTweet
}