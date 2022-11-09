const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')


app.set('port', process.env.PORT || 4000)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(morgan('combined'))


app.get('/', (req, res) => {
    res.send({Title:'Hello ADSI !!'})
})

app.listen(app.get('port'), () => {
    console.log(`Server is running on localhost:${app.get("port")}`)
})