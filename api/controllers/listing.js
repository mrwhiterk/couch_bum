const { Listing } = require('../models/index');

module.exports = {
  index: (req, res) => {
    Listing.find({}).then(listings => {
      res.json(listings);
    });
  },
  show: (req, res) => {
    Listing.findOne({ _id: req.params.id }).then(listing => {
      res.json(listing);
    });
  },
  create: (req, res) => {
    Listing.create(req.body).then(listing => res.json(listing));
  },
  update: (req, res) => {
    Listing.findOne({ _id: req.params.id }).then(listing => {
      listing = req.body;
      listing.save((err, listing) => {
        res.json(listing);
      });
    });
  },
  delete: (req, res) => {
    Listing.findByIdAndRemove({ _id: req.params.id }).then(listing => {
      res.json(listing);
    });
  },
};
