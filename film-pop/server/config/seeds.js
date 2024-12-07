const db  = require('./connection');
const { User, Genre } = require("../models");
const cleanDB = require("./cleanDB");

db.once('open', async () => {
    await cleanDB('Genre', 'genres');
    await cleanDB('User', 'users');

    const genres = await Genre.insertMany([
      { name: "Action" },
      { name: "Adventure" },
      { name: "Animation" },
      { name: "Biography" },
      { name: "Comedy" },
      { name: "Crime" },
      { name: "Drama" },
      { name: "History" },
      { name: "Horror" },
      { name: "Music" },
      { name: "Mystery" },
      { name: "Action" },
      { name: "Romance" },
      { name: "Sci-Fi" },
      { name: "Thriller" },
      { name: "War" },
      { name: "Short" },
    ]);

    console.log('genres seeded!');

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