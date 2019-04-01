const {TWITTER, GIPHY} = require('./entities.js');
const FS = require('fs');

const {ENDPOINT_TWITTER_SEARCH_TWEETS, ENDPOINT_TWITTER_POST_UPDATE_TWEET, ENDPOINT_TWITTER_RETWEET, ENDPOINT_TWITTER_POST_MEDIA} = require('./apiEndpoins.js');

const {GET_TWEET_INFO_BY_PARAMETER_ENUM, GET_GIF_INFO_BY_PARAMETER_ENUM} = require('./enums.js');

const {ERROR_SEARCHING_TWEET, ERROR_RETWEETING, ERROR_TWEETING} = require('./errorsMessages.js');

const {downloadImg} = require('./downloadImg.js');
const {getGifUrl} = require('./giphy.js');

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
    const id = await getTweetByParameter(GET_TWEET_INFO_BY_PARAMETER_ENUM.BY_ID, query);
    if (id) {
        try {
            TWITTER.post(ENDPOINT_TWITTER_RETWEET, {id});
            console.log("RETWEETED!");
        } catch (err) {
            console.error(ERROR_RETWEETING, err.stack);
        }
    } else {
        console.error(ERROR_SEARCHING_TWEET);
    }
}

const updateTweetStatus = async(message, mediaUpload = undefined, originalTweet = undefined) => {
    const respone = await TWITTER.post(ENDPOINT_TWITTER_POST_UPDATE_TWEET, {
        status : `${message}`,
        media_ids: mediaUpload,
        in_reply_to_status_id: originalTweet
    });
    
    if (respone) {
        console.log(`New Tweet! \n${message}`);
    } else {
        console.error(ERROR_TWEETING);
    }
}

const getTweetByParameter = async(byParameter, query) => {
    try {
        const {data} = await TWITTER.get(ENDPOINT_TWITTER_SEARCH_TWEETS, searchOnTwitter(query));
        const {statuses} = await data;
        const status = await statuses[0];
        return status[byParameter];
    } catch (err) {
        return null;
    }
}

const getTweetMainParameters = async(query) => {
    try {
        const {data} = await TWITTER.get(ENDPOINT_TWITTER_SEARCH_TWEETS, searchOnTwitter(query));
        
        const {statuses} = await data;
        const status = await statuses[0];
        
        const {id_str, user} = await status;
        const {screen_name} = await user;

        return {
            id_str,
            screen_name
        }
    } catch (err) {
        return null;
    }
}

const replyToTweet = async(query) => {
    const tweet = await getTweetMainParameters(query);
    const gifUrl = await getGifUrl(GET_GIF_INFO_BY_PARAMETER_ENUM.BY_URL, query);
    const gifPath = await downloadImg(gifUrl);
    const uploadedGifId = await uploadImgToTwitter(gifPath);

    if (tweet) {
        updateTweetStatus(`@${tweet.screen_name} Awesome!`, uploadedGifId, tweet.id_str);
    } else {
        console.error(ERROR_SEARCHING_TWEET);
    }
}

module.exports = {
    uploadImgToTwitter,
    retweet,
    updateTweetStatus,
    getTweetByParameter,
    replyToTweet
}
