// const {TWITTER, GIPHY, CMC, FS} = require('./entities.js');
const {GET_TWEET_INFO_BY_PARAMETER_ENUM, GET_GIF_INFO_BY_PARAMETER_ENUM, SEARCH_TWEET_QUERY_ENUM} = require('./enums.js');
// const {ENDPOINT_TWITTER_SEARCH_TWEETS, ENDPOINT_TWITTER_POST_UPDATE_TWEET, ENDPOINT_TWITTER_RETWEET, ENDPOINT_TWITTER_POST_MEDIA} = require('./apiEndpoins.js');
// const CRYPTO_UPDATE_IMG_PATH = './img/cryptoPriceUpdate.jpg';

const {updateCryptoPrices} = require('./crypto.js');
const {retweet, updateTweetStatus, getTweetByParameter, replyToTweet} = require('./twitter.js');
// const {getGif} = require('./giphy.js');

// const PARAMS_GIPHY_SEARCH = {
//     tag: 'Sport'
// }

// const getGif = async(byParameter) => {
//     try {
//         const respone = await GIPHY.random(PARAMS_GIPHY_SEARCH);
//         return await respone[byParameter];
//     } catch (err) {
//         return null;
//     }
// }

// const searchOnTwitter = (query) => {
//     return {
//         q: query,
//         result_type: 'recent',
//         lang: 'en',
//         count: 1
//     }
// }

// const getTweetByParameter = async(byParameter, query) => {
//     try {
//         const {data} = await TWITTER.get(ENDPOINT_TWITTER_SEARCH_TWEETS, searchOnTwitter(query));
// 
//         const {statuses} = await data;
//         const status = await statuses[0];
// 
//         if (byParameter !== GET_TWEET_INFO_BY_PARAMETER_ENUM.BY_TWEET_URL) {
//             return status[byParameter];
//         } else {
//             const {entities} = await status;
//             const {urls} = await entities;
//             const url = await urls[0];
// 
//             console.log(urls);
//         }
//     } catch (err) {
//         return null;
//     }
// }

// const getCoinData = (coin) => {
//     return {
//         name: coin.name,
//         id: coin.id,
//         price: (coin.quote.USD.price).toFixed(2)
//     }
// }

// const retweet = async(query) => {
//     const id = await getTweetByParameter(GET_TWEET_INFO_BY_PARAMETER_ENUM['BY_ID'], query);
//     if (id) {
//         try {
//             // TWITTER.post(ENDPOINT_TWITTER_RETWEET, {id});
//             console.log("RETWEETED!");
//         } catch (err) {
//             console.error("ERROR while retweeting tweet!", err.stack);
//         }
//     } else {
//         console.error("ERROR while searching tweet!");
//     }
// }

// const updateTweetStatus = async(message, mediaUpload) => {
//     const respone = await TWITTER.post(ENDPOINT_TWITTER_POST_UPDATE_TWEET, {
//         status : `Update Status Bot:\n${message}`,
//         media_ids: mediaUpload
//     });
//
//     if (respone) {
//         console.log(`New Tweet!\n${message}`);
//     } else {
//         console.error("ERROR while updating tweet!")
//     }
// }

// const updateCryptoPrices = async() => {
//     const {data} = await CMC.getTickers({
//         limit: 3
//     });
//
//     const topThreeCoins = data.map(getCoinData);

//     let priceUpdateString = "🌔  Top 3 Cryptocurrency Coins $USD price update:  🌔\n";
//     topThreeCoins.forEach(({name, price}) => {
//         priceUpdateString += (`📈 #${name} 💵: ${price}$\n`);
//     });
//
//     const cryptoImgUpload = await uploadImgToTwitter(CRYPTO_UPDATE_IMG_PATH);
//
//     updateTweetStatus(priceUpdateString, cryptoImgUpload);
// }

// const uploadImgToTwitter = async(imgPath) => {
//     const imgFs = await FS.readFileSync(imgPath, {encoding: 'base64'});
//     const {data} = await TWITTER.post(ENDPOINT_TWITTER_POST_MEDIA, {media_data: imgFs});
//     const {media_id_string} = await data;
//     return [media_id_string];
// }

// const replyToTweet = async(query) => {
//     const url = await getTweetByParameter(GET_TWEET_INFO_BY_PARAMETER_ENUM['BY_TWEET_URL'], query);
//     if (url) {
//         try {
//             // TWITTER.post(ENDPOINT_TWITTER_RETWEET, {id});
//             console.log("RETWEETED! ", url);
//         } catch (err) {
//             console.error("ERROR while retweeting tweet!", err.stack);
//         }
//     } else {
//         console.error("ERROR while searching tweet!");
//     }
// }

const initBot = () => {
    updateCryptoPrices();
    // updateTweetStatus("Test!");
    // retweet(SEARCH_TWEET_QUERY_ENUM.CRYPTO);

    // replyToTweet(SEARCH_TWEET_QUERY_ENUM.CRYPTO);
    // setInterval(updateCryptoPrices, 1800000);
    // setInterval(retweet, 180000, SEARCH_TWEET_QUERY_ENUM.LIVE_SPORT); // every 3 minutes
}

initBot();