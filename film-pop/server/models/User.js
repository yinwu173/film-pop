const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const MovieList = require('./MovieList');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    movieLists: [
        {
            type: Schema.Types.ObjectId,
            ref: "MovieList", // need to refer to the MovieList model
        },
    ]
});

// Set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})


// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;