require('dotenv').config()

const express = require('express')
const app = express()
const mongoose= require('mongoose')
const db = mongoose.connection
const methodOverride = require('method-override')

const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended : false}))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
db.once('open', ()=>{
    console.log('denver, co')
})

// const Comment = require('./models/comments.js')


const buchlaController = require('./controllers/buchla.js')
app.use('/buchla', buchlaController)

// const sergeController = require('./controllers/serge.js')
// app.use('/serge', sergeController)

// const ciatController = require('./controllers/ciat.js')
// app.use('/ciat', ciatController)


app.get('/', (req, res)=>{
    res.send('super intro up')
})

app.get('/explore', (req, res)=>{
    res.render('Explore')
})

// const Test = require('./models/tests.js')

// app.get('/seed', (req,res) =>{

//     Test.create({
//         name: 'James',
//         age: 35,
//         isPerson: true
//     }, (err, data)=>{
//         res.redirect('/')
//     })
// })


app.listen(PORT, ()=>{
    console.log('monkey mania')
})