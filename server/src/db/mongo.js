const mongoose = require('mongoose')

// const ENV_FILE = path.join(__dirname, '.env');
// require('dotenv').config({ path: ENV_FILE });
require('dotenv').config();

const url = process.env.mongoURI
mongoose.connect(url, {
  auth: {
    user: process.env.COSMOSDB_USER,
    password: process.env.COSMOSDB_PASSWORD
  },
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false,
retryWrites: false
})
.then(() => console.log('Connection to CosmosDB successful'))
.catch((err) => console.error(err));
