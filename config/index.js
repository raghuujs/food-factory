const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err)=>{
    if(!err){
        console.log('Mongodb connected successed')
    }
    else{
        console.log('Mongodb connected err'+err)
    }
})
