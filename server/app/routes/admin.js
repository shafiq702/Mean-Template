var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User')
// name: "demo1", email:"demo@gmail.com",salt:"demo123", password: "demo"
router.post('/login',function(req, res, next){
  return User.findOne({
    email: req.body.username
  })
  .then(function(user){
    res.json(user)
  })
  .catch(function(err){
    return err
  })
})


module.exports = router;
