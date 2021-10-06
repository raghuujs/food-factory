const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    foodName: {
        type: String
    },
    price:{
        type:String
    },
    qty:{
        type:String
    },
});

module.exports = mongoose.model('foods', schema);
