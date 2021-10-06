const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    name:{
        type:String
    },
    mobile:{
        type:String
    },
    email:{
        type:String
    },
    passWord:{
        type:String
    }

});

module.exports = mongoose.model('user', schema);
