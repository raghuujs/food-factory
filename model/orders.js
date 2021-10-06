const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    userId: {
        type: String
    },
    foodId:{
        type:String
    },
    hotelId:{
        type:String
    }

});

module.exports = mongoose.model('orders', schema);
