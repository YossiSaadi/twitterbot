const GET_TWEET_INFO_BY_PARAMETER_ENUM = {
    BY_ID: 'id_str',
    BY_TEXT: 'text',
    BY_TWEET_URL: 'entities.urls[0].url',
    // BY_
    BY_SOMETHINGELSE: 'some-else'
};

const GET_GIF_INFO_BY_PARAMETER_ENUM = {
    BY_BITLY_URL: 'bitly_url',
    // BY_
    BY_SOMETHINGELSE: 'some-else'
};

const SEARCH_TWEET_QUERY_ENUM = {
    CRYPTO: '#BTC',
    LIVE_SPORT: '#LiveSport'
}

module.exports = {
    GET_TWEET_INFO_BY_PARAMETER_ENUM,
    GET_GIF_INFO_BY_PARAMETER_ENUM,
    SEARCH_TWEET_QUERY_ENUM
}