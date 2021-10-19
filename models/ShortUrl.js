const mongoose = require("mongoose");
const shortId = require("shortid");

const shortUrlSchema = new mongoose.Schema({
    url: {
        type: String,
        require: [true, "Please provide a url"],
    },
    short: {
        type: String,
        require: true,
        default: shortId.generate,
    },
});

module.exports = mongoose.model("ShortUrl", shortUrlSchema);
