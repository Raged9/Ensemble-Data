const mongoose = require('mongoose');

const instagramSchema = new mongoose.Schema({
    id : String,
    username : String,
    full_name : String,
    is_private : Boolean,
    is_verified : Boolean,
    followers : String,
    following : String,
});

const Instagram = mongoose.model('Instagram', instagramSchema);

module.exports = { Instagram };
