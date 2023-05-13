# Setting up everything and running application in development enviroment

## Node.js

First thing you must do is download and install **Node.js** on your machine

## Dependencies

After pulling down the code from GitHub in each service (navigate both in api and client folder) run this command in your terminal

``` npm i ```

## Keys

In **api** folder create another folder called config and inside of it create keys.js file. In such a file add this: 

``` module.exports = {mongoURI: "yourMongoURI"}; ```

And instead of yourMongoURI add URI from your MongoDB Database either it be on Atlas or run localy