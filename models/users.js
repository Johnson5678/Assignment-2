const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        preference: [String]
        //entertainment, sport, politics, technology, lifestyle, traval, Finance
    }
);

mongoose.model('users', userSchema);
