const { User } = require('../models');

User.remove({}).then(_ => {
  User.insertMany([
    {
      username: 'cat123',
      email: 'cat@cat.com',
      type: 1,
      bio: 'I am a cat',
      listings: [
        {
          address: '123 high st',
          availability: true,
          imgUrls: [
            'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn',
          ],
          notes: 'I like to do cat things',
        },
      ],
      skills: ['web development', 'guitar', 'cooking'],
    },
    // {
    //   username: 'dog345',
    //   email: 'dog@dog.com',
    //   type: 0,
    //   bio: 'I am a dog',
    //   listings: [
    //     {
    //       address: '345 gay st',
    //       availability: false,
    //       imgUrls: [
    //         'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn',
    //         'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn',
    //       ],
    //       notes: 'I like to do dog stuff',
    //     },
    //   ],
    //   skills: [],
    //   image: String,
    // },
    // {
    //   username: 'frog678',
    //   email: 'frog@frog.com',
    //   type: 1,
    //   bio: 'I am a frog',
    //   listings: [],
    //   skills: ['beekeeping', 'rockclimbing', 'mathematics', 'cooking'],
    //   image: String,
    // },
  ]).then(user => {
    console.log(user);
    process.exit();
  });
});
