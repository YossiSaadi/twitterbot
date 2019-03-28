const {CMC} = require('./entities.js');

const CRYPTO_UPDATE_IMG = {
    path: './img/cryptoPriceUpdate.jpg'
}

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

    const cryptoImgUpload = await uploadImgToTwitter(CRYPTO_UPDATE_IMG.path);
    
    updateTweetStatus(priceUpdateString, cryptoImgUpload);
}

module.exports = {
    updateCryptoPrices
}