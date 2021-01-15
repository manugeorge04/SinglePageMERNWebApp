var express = require('express');
var router = express.Router();
const Holidates = require('./../model/holidates')

router.get('/api/find/:location', async (req, res) => {           
  const collection = await Holidates.find({location: req.params.location})  
  if (collection.length === 0){    
    return res.send("No Data Available for this location")
  }  
  res.send(collection)
});

module.exports = router;