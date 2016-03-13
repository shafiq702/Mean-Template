var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User')
var Blog = mongoose.model('Blog')

router.get('/post', function(req, res, next){
  return Blog.find()
  .then(function(allPosts){
    res.json(allPosts)
  })
})

router.post('/post/create',function(req, res, next){
  return Blog.create({
    title: req.body.title,
    contents: req.body.body,
    state: req.body.state,
    author: req.body.author
  })
  .then(function(user){
    res.json(user)
  })
  .catch(function(err){
    return err
  })
})


module.exports = router;
