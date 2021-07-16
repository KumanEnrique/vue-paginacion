const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageURL: String,
    num:Number
})

module.exports = mongoose.model('Article', articleSchema)