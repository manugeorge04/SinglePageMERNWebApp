const express = require('express');

require('./server/src/db/mongo');

const apiRouter = require('./server/src/routes/api')

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json())

app.use(apiRouter)

app.listen(port, () => {
    console.log('server is up on', port)
})