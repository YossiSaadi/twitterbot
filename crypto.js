const {CMC} = require('./entities.js');
const CRYPTO_UPDATE_IMG = {
    path: './img/cryptoPriceUpdate.jpg'
}
const {GET_TWEET_INFO_BY_PARAMETER_ENUM, GET_GIF_INFO_BY_PARAMETER_ENUM, SEARCH_TWEET_QUERY_ENUM} = require('./enums.js');
const {uploadImgToTwitter, updateTweetStatus} = require('./twitter.js');

const getCoinData = (coin) => {
    return {
        name: coin.name,
        id: coin.id,
        price: (coin.quote.USD.price).toFixed(2)
    }
}

const updateCryptoPrices = async() => {
    const {data} = await CMC.getTickers({
        limit: 3
    });
    
    const topThreeCoins = data.map(getCoinData);

    let priceUpdateString = "🌔  Top 3 Cryptocurrency Coins $USD price update:  🌔\n";
    topThreeCoins.forEach(({name, price}) => {
        priceUpdateString += (`📈 #${name} 💵: ${price}$\n`);
    });
    
    if (!CRYPTO_UPDATE_IMG.uploadedId) {
        const cryptoImgUpload = await uploadImgToTwitter(CRYPTO_UPDATE_IMG.path);
        CRYPTO_UPDATE_IMG.uploadedId = cryptoImgUpload;
    }

    // console.log(CRYPTO_UPDATE_IMG.uploadedId);
    
    updateTweetStatus(priceUpdateString, CRYPTO_UPDATE_IMG.uploadedId);
}

module.exports = {
    updateCryptoPrices
}