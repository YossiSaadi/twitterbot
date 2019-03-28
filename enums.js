const GET_TWEET_INFO_BY_PARAMETER_ENUM = {
    BY_ID: 'id_str',
    BY_TEXT: 'text',
    BY_SCREEN_NAME: 'user.screen_name'
};

const GET_GIF_INFO_BY_PARAMETER_ENUM = {
    BY_URL: 'image_original_url'
};

const SEARCH_TWEET_QUERY_ENUM = {
    CRYPTO: '#BTC',
    LIVE_SPORT: '#LiveSport'
}

const DOWNLOADED_FILE_ENDING = {
    GIF: 'gif',
    JPG: 'jpg',
    PNG: 'png'
}

module.exports = {
    GET_TWEET_INFO_BY_PARAMETER_ENUM,
    GET_GIF_INFO_BY_PARAMETER_ENUM,
    SEARCH_TWEET_QUERY_ENUM,
    DOWNLOADED_FILE_ENDING
}