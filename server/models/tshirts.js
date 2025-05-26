const mongoose = require("mongoose");

const schema = mongoose.Schema({
    customer: {type: String, required: true},
    color: {type: String, required: true},
    text: {type: String, required: true},
    size: {type: String, required: true},
    logo: {type: String, required: true},

});

module.exports = mongoose.model("Tshirt", schema);