const express = require('express');
const router = new express.Router();
const mongoose = require('mongoose');
const User = require('mongoose').model('User');

router.get('/dashboard', (req, res) => {
  res.status(200).json({
    message: "You're authorized to see this secret message.",
    // user values passed through from auth middleware
    user: req.user
  });
});

router.put('/dashboard', (req, res) => {
  // Update the specific record according to user ID
  // Make a heroku instance
  User.findById(req.user._id, function(err, user) {
    if (err)
      res.send(err);
    for(var key in req.body) {
      if(key === 'amountJustConsumed'){
        user.totalAmountConsumed = parseInt(user.totalAmountConsumed, 10) + parseInt(req.body.amountJustConsumed, 10);
      } else {
        user[key] = req.body[key];
      }
      console.log(user.totalAmountConsumedat);
    }

    user.save(function(err) {
      if (err)
        res.send(err);
      res.json({
        message: "User Updated!"
      });
    });
  });
})


router.delete('/dashboard',function(req, res){
  User.remove({
    _id:req.user._id
  },

function(err, user){
  if(err)
    res.send(err)
  res.json({
    message:"Successfully deleted"
  });
});
});

module.exports = router;
