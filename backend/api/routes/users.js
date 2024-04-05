
var express = require('express');
var userModel = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {

  var userDetails = new userModel({
    name: 'Ganesh',
    email: 'ganeshkumili18@gmail.com',
    password: '123456789',
    
  });

  // userDetails.save(function(err,req1){
  //   if(err) throw err;
  //   res.render('index', { title: 'User Data Inserted' });
  // })
  try {
      await userDetails.save();
      res.render('index', { title: 'User Data Inserted' });
  } catch (error) {
      // Handle the error
      console.error(error);
      return res.status(500).send('Internal server error');
  }

  
});

module.exports = router;
