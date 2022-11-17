const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//model for push notifications

const NotificationSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    vibrate: {
        type: Boolean,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    badge: {
        type: String,
        required: true
    },
    actions: {
        type: String, // [{ action: "Detail", title: "View", icon: "URL for icon "}]
        required: true
    }
 })

 module.exports = mongoose.model("Notifications", NotificationSchema);
