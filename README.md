# Twitter Bot

### Twitter Bot. Assignment for the course 10310 "Internet Technologies", Afeka
I built it with HTML, CSS, NodeJS & JavaScript

### Main features:
  Retweeting others tweets
  Post new tweet 
  Post reply to others tweets
  Post update for the top 3 cryptocurrency prices
  Post GIFs

### How it works?
  Twitter API - to operate the bot
  GIPHY API - to get GIFs
  CoinMarketCap API - to get info on cryptocurrency
  Github integration - to host the code, update it, and have it online continuously 
  Heroku integration - for having the bot working 24/7, without having the need to run it locally
  DownloadFile library - for downloading images and gifs to later upload it


## Installation Instructions
After cloning, type "npm install" to install all dependencies
Add your Twitter, Giphy & CoinMarketCap API keys to the 'configApiKeys.js' file
## Running Instructions
  One of two ways:
  1. run it locally:
    After installation finished that type "npm start" and the bot would be working according to the intervals
  2. run it on Heroku
    Go to Heroku and upload the files to your account
    
  Heroku takes the ‘main’ set, and run it continuously.
  On startup the bot tweets: “Starting Bot in Heroku!”.
  In the code there's intervals for the features:
    Every 1 hour the bot tweets the top 3 cryptocurrency ‘name’ & ‘price’ with related photo
    Every 1.5 hours the bot retweets a tweet that contains the hashtag ‘#LiveSport’
    Every 2 hours the bot replies to a tweet that contains the hashtag ‘#LiveSport’ with a sports related gif
    Every 12 hours the bot tweets “This Bot is stille ALIVE !”


## Then GoTO
https://twitter.com/YOUR_TWITTER_ACCOUNT

## For My Twitter Bot:
https://twitter.com/BotYossi

ENJOY !

![Waiting](https://raw.githubusercontent.com/YossiSaadi/twitterbot/master/twitter1.png)
![Waiting](https://raw.githubusercontent.com/YossiSaadi/twitterbot/master/twitter2.png)
