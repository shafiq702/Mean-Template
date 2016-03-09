var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User')

router.post('/login',function(req, res, next){
  User.find({
    username: req.body.username,
    password: req.body.password
  })
  .then(function(user){
    return user;
  })
  .catch(function(err){
    return err
  })
})


module.exports = router;
