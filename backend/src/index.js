const express = require('express')
const app = express()
const cors = require('cors')


const IndexRoute = require('./routes/index')
require('./database')

//settings
app.set('port',process.env.PORT || 3000)

//middleware
app.use(cors())

//routes
app.use(IndexRoute)

//starting the server
app.listen(app.get('port'),()=>{
    console.log("server on port",app.get('port'))
})