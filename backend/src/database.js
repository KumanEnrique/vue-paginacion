const mongoose = require('mongoose')

//connecting db       ,{ useNewUrlParser: true,useUnifiedTopology: true }
mongoose.connect('mongodb://localhost/node-vue',{ useNewUrlParser: true,useUnifiedTopology: true })
    .then((db)=>console.log('db connected'))
    .catch((error)=>console.log(error))