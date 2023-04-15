const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    author: { type: String },
    authorSlug: { type: String },
    content: { type: String },
    dateAdded: { type: String },
    dateModified: { type: String },
    length: { type: String },
    tags: { type: String },
    _id: { type: String }
})
const QuotesModel = mongoose.model("Qoute", dataSchema);

module.exports = { QuotesModel }