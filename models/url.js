const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true
    },
    visitHistory: [{
        timeStamp: { type: Number }
    }], // now we want that a logged in user only can see his own search history
    createdBy:{
        type: mongoose.Schema.Types.ObjectId, // means that we will give a id here
        ref: "users" // means that it will give refrence to user
    }


}, {
    timestamps: true
});

const URL = mongoose.model('URL', urlSchema);

module.exports = URL;
