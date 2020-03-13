const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const friend = require('../models/friend');
const validateAddfriendInput = require('../validation/addfriend');

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
    console.log(req.body);
    const { errors, isValid } = validateAddfriendInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
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
    console.log(req.body);
    const del = await friend.findOneAndDelete({
      _id: req.body.id
    });
    if (del) {
      console.log(del);
      res.send({
        del,
        msg: 'delete successfully'
      })
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
