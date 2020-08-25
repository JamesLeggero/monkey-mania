require('dotenv').config()

const express = require('express')
const app = express()
const mongoose= require('mongoose')
const db = mongoose.connection
const methodOverride = require('method-override')
const nodemailer=require('nodemailer')

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

const Module = require('./models/modules.js')
const Message = require('./models/messages.js')

// const Comment = require('./models/comments.js')


const buchlaController = require('./controllers/buchla.js')
app.use('/buchla', buchlaController)

const sergeController = require('./controllers/serge.js')
app.use('/serge', sergeController)

const ciatController = require('./controllers/ciat.js')
app.use('/ciat', ciatController)


app.get('/', (req, res)=>{
    // res.send('super intro up')
    res.render('Welcome')
})

app.get('/about', (req, res)=>{
    Module.find({}, (err, allModules)=>{
        if(err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.render('About', {
                modules: allModules
            })
        }
    })
})

app.post('/about', (req, res)=>{
    const gmailUser = process.env.GMAIL_USER
    const gmailPass = process.env.GMAIL_PASS
    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: gmailUser,
            pass: gmailPass
        }
    })
    const mailOpts = {
        from: 'test',
        to: gmailUser,
        subject: `New MM message from ${req.body.name}`,
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
    smtpTrans.sendMail(mailOpts, (err, response)=>{
        if (err){
            res.status(500).send({
                error:err.message
            })
        } else {
            Message.create(req.body, (err, createdMessage)=>{

                res.redirect('/about')
            })
            // res.redirect('/about')
        }
    })
}

)

app.get('/explore', (req, res)=>{
    
    Module.find({}, (err, allModules)=>{
        if(err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            // console.log(testing)
            // console.log(req.body.name)
            const testing = req.query
            console.log(testing)
            res.render('Explore', {
                testing: testing,
                modules: allModules,
                
            })
        }
    })
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