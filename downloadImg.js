const {DOWNLOADED_FILE_ENDING} = require('./enums.js');
const download = require('download-file');

const downloadImg = async(url, type = DOWNLOADED_FILE_ENDING.GIF) => {
    const options = {
        directory: "./img/",
        filename: "uploaded_" + type + '.' + type
    }
    await download(url, options);
    return options.directory + options.filename;
}

module.exports = {
    downloadImg
}
