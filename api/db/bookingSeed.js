const { Booking } = require('../models');

Booking.remove({}).then(_ => {
  Booking.insertMany([
    {
      date: '11/04/19',
      skillTime: '1800',
      address: '1234 loop ave',
    },
    {
      date: '5/01/19',
      skillTime: '2200',
      address: '323 lime ave',
    },
    {
      date: '7/20/19',
      skillTime: '1000',
      address: '55 five ave',
    },
  ]).then(booking => {
    console.log(booking);
    process.exit();
  });
});
