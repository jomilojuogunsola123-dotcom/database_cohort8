const cloudinary = require('cloudinary').v2;
//import {v2 as cloudinary} from 'cloudinary(this is how you import usinf mgs)

cloudinary.config({
    cloud_name : "tio8ftqg",
    api_key : "677691593892891",
    api_secret : "ZWn6xpl2Rxjo083SSI9Sd8KDuG0"
})

module.exports = cloudinary;