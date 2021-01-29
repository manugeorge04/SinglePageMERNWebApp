# SinglePageMERNWebApp

A single page web app to be used in conjunction with MS Teams Messaging Extension as a Task Module. The web app is themed with FluentUI React components to retrieve data from Azure Cosmos DB and render the data based on the user's desired location. The data can then be sent to the MS Teams client if invoked via one to share the data within the chat window.

A production version of this webapp can be found [here](https://holidaylist.azurewebsites.net/)

The git repo for the Microsoft Teams Messaging Extension that utilizises this web app in its Task Module can be found [here](https://github.com/manugeorge04/MSTeams_Holiday_MessageExtension)



## Prerequisites

- [NodeJS](https://nodejs.org/en/)


## Tech Stack Used

- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [Azure Cosmos DB's API for MongoDB](https://docs.microsoft.com/en-in/azure/cosmos-db/mongodb-introduction)
- [FluentUI](https://fluentsite.z22.web.core.windows.net/0.52.0)
- [Microsoft Bot Framwork SDK](https://docs.microsoft.com/en-us/azure/bot-service/index-bf-sdk?view=azure-bot-service-4.0)

## Set-Up

Create a `.env` file in the root directory and add the following lines

>COSMOSDB_USER="your-db-user-name"

>COSMOSDB_PASSWORD="your-db-user-password"

>mongoURI="your-mongo-URI"


 - Note: You can either use a install and use mongodb locally or if you want to explore Azure Cosmos DB the guide to above connection information can be found [here](https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-robomongo)


## Build and Run

### `npm install`

### `cd ./client && yarn install`

### `npm start`

### Open another terminal :

### `cd ./client && yarn run dev-server`


