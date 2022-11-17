const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user_id:{
        type: Number,
        required: true
    },
    visibility:{
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    image: {
        type: Buffer,
        required: true
    },
})

module.exports = mongoose.model("Posts", PostSchema);
