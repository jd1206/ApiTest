const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')


app.set('port', process.env.PORT || 4000)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api/users', require('./api/users'))


app.listen(app.get('port'), () => {
    console.log(`Server is running on localhost:${app.get("port")}`)
})