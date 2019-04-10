const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');
const passport = require('../config/passport');
const config = require('../config/config');
const { User, Skill, Listing } = require('../models/index');

router.post('/signup', (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password,
    };
    User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        User.create(newUser).then(user => {
          if (user) {
            var payload = {
              id: newUser.id,
            };
            var token = jwt.encode(payload, config.jwtSecret);
            res.json({
              token: token,
            });
          } else {
            res.sendStatus(401);
          }
        });
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

router.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id,
          };
          var token = jwt.encode(payload, config.jwtSecret);
          res.json({
            token: token,
          });
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
});

router.get('/', (req, res) => {
  User.find({}).then(users => {
    res.json(users);
  });
});

router.get('/hosts', (req, res) => {
  User.find({ formType: 0 }).then(users => {
    res.json(users);
  });
});

router.get('/guests', (req, res) => {
  User.find({ formType: 1 }).then(users => {
    res.json(users);
  });
});

router.get('/both', (req, res) => {
  User.find({ formType: 2 }).then(users => {
    res.json(users);
  });
});

router.post('/:userId/addSkill', (req, res) => {
  User.findOne({ _id: req.params.userId }).then(user => {
    Skill.create(req.body).then(skill => {
      user.skills.push(skill);

      user.save((err, user) => {
        res.json(user);
      });
    });
  });
});

router.post('/:userId/addListing', (req, res) => {
  User.findOne({ _id: req.params.userId }).then(user => {
    Listing.create(req.body).then(listing => {
      user.listings.push(listing);

      user.save((err, user) => {
        res.json(user);
      });
    });
  });
});

router.put('/:userId/editListing/:listingId', (req, res) => {
  User.findOne({ _id: req.params.userId }).then(user => {
    const { imageUrls, address, availability, notes } = req.body;

    let listing = user.listings.find(item => item.id === req.params.listingId);

    listing.imageUrls = imageUrls;
    listing.address = address;
    listing.availability = availability;
    listing.notes = notes;

    user.save((err, booking) => {
      res.json(booking);
    });
  });
});

router.get('/listings', (req, res) => {
  User.find({}).then(users => {
    const allListings = [];

    users.forEach(user => {
      user.listings.forEach(listing => {
        allListings.push(listing);
      });
    });

    res.json(allListings);
  });
});

router.get('/getListingOwner/:id', (req, res) => {
  User.find({}).then(users => {
    let listingOwner = {};

    users.forEach(user => {
      user.listings.forEach(listing => {
        if (listing.id === req.params.id) {
          listingOwner = user;
        }
      });
    });

    res.json(listingOwner);
  });
});

router.delete('/:userId/removeSkill/:skillId', (req, res) => {
  User.findOne({ _id: req.params.userId }).then(user => {
    user.skills = user.skills.filter(item => item.id != req.params.skillId);

    user.save((err, user) => {
      res.json(user);
    });
  });
});

router.delete('/:userId/removeListing/:listingId', (req, res) => {
  User.findOne({ _id: req.params.userId }).then(user => {
    user.listings = user.listings.filter(
      item => item.id != req.params.listingId
    );

    user.save((err, user) => {
      res.json(user);
    });
  });
});

router.get('/:id', (req, res) => {
  User.findOne({ _id: req.params.id }).then(user => {
    res.json(user);
  });
});

module.exports = router;
