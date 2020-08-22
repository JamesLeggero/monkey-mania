const express = require('express')
const router = express.Router()
const Buchla = require('../models/buchla.js')

//i
router.get('/', (req, res)=>{
    // res.send('Buchla microsite')
    Buchla.find({}, (err, allBuchla)=>{
        if(err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.render('buchla/Index', {
                buchlas: allBuchla
            })
        }
    })
})

//n
    router.get('/new', (req, res)=>{
        res.render('buchla/New')
    })

//d
router.delete('/:id', (req, res)=>{
    Buchla.findByIdAndRemove(req.params.id, (err, deletedBuchla)=>{
        if (err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.redirect('/buchla')
        }
    })
})

//u
router.put('/:id', (req, res)=>{
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
    Buchla.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBuchla)=>{
        if (err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.redirect('/buchla')
        }
    })
})

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
router.get('/:id/edit', (req, res)=>{
    Buchla.findById(req.params.id, (err, buchlaToEdit)=>{
        if (err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.render('buchla/Edit', {
                buchla: buchlaToEdit
            })
        }
    })
})

//s
router.get('/:id', (req, res)=>{
    Buchla.findById(req.params.id, (err, foundBuchla)=>{
        if (err) {
            // res.status(500).send({
            //     err: error.message
            // })
        } else {
            res.render('buchla/Show', {
                buchla: foundBuchla
            })
        }
    })
})







module.exports = router