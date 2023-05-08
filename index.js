const express = require('express');
const service = require('./services')
const About = require('./About');
const book = require('./books');
const app = express()
const cors = require('cors')
app.set('view engine', 'ejs')

    app.get('/data', (req, res) => {
        const data = {
            fname: "Harish",
            lname: "Sekar",
            age: 20
        }
    res.render('index',{data})
    })

app.use(cors())

app.get('/',(req,res)=>{
    res.send('This is home page')
})

app.use('/service',service)
app.use('/about',About)
app.use('/book',book)

app.listen(5000)