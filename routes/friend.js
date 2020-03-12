const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const friend = require('../models/friend');

router.get('/friend/list', async (req, res) => {
  try {
    const friendlist = await friend.find();
    res.send(friendlist);

  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
router.post('/friend/add', async (req, res) => {
  try {
    const addfriend = new friend({
      name: req.body.name
    });
    addfriend.save(function(err) {
      if (err) return res.send(err);
      res.send({
        msg: 'successfully add friend'
      });
    })
  } catch (err) {
    res.send(err);
  }
});

router.post('/friend/delete', async (req, res) => {
  try {
    const del = await friend.findByIdAndRemove({
      _id: req.body.id
    });
    if (del) {
      res.send({del,msg:'delete successfully'})
    } else {
      res.send({
        error: 'friend not found'
      })
    }
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
