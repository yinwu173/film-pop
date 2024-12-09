const db  = require('./connection');
const { User } = require("../models");
const cleanDB = require("./cleanDB");

db.once('open', async () => {
    await cleanDB('User', 'users');

    await User.create({
        username: 'JoeJoe',
        email: 'joejoe@mail.com',
        password: 'password1'
    });
    await User.create({
      username: "TheFool",
      email: "thefool@mail.com",
      password: "password2",
    });

    console.log('users seeded!');

    process.exit();
})