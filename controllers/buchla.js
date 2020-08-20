const express = require('express')
const router = express.Router()
const Buchla = require('../models/buchla.js')

//i
router.get('/', (req, res)=>{
    res.send('Buchla microsite')
})

//n
    router.get('/new', (req, res)=>{
        res.render('buchla/New')
    })

//d

//u

//c
router.post('/', (req, res)=>{
    if (req.body.acceptsNegative === 'on'){
        req.body.acceptsNegative = true
    } else {
        req.body.acceptsNegative = false
    }
    if (req.body.isModule === 'on'){
        req.body.isModule = true
    } else {
        req.body.isModule = false
    }

    Buchla.create(req.body, (err, createdBuchla)=>{
        if(err){
            res.status(500).send({
                err: error.message
            })
        } else {
            res.redirect('/buchla')
        }
    })
})

//e

//s







module.exports = router