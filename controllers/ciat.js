const express = require('express')
const router = express.Router()
const Ciat = require('../models/modules.js')

//i
router.get('/', (req, res)=>{
    // res.send('Ciat microsite')
    Ciat.find({}, (err, allCiat)=>{
        if(err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.render('ciat/Index', {
                ciats: allCiat
            })
        }
    })
})

//n
    router.get('/new', (req, res)=>{
        res.render('ciat/New')
    })

//d
router.delete('/:id', (req, res)=>{
    Ciat.findByIdAndRemove(req.params.id, (err, deletedCiat)=>{
        if (err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.redirect('/ciat')
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
    Ciat.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedCiat)=>{
        if (err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.redirect('/ciat')
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

    Ciat.create(req.body, (err, createdCiat)=>{
        if(err){
            res.status(500).send({
                err: error.message
            })
        } else {
            res.redirect('/ciat')
        }
    })
})

//e
router.get('/:id/edit', (req, res)=>{
    Ciat.findById(req.params.id, (err, ciatToEdit)=>{
        if (err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.render('ciat/Edit', {
                ciat: ciatToEdit
            })
        }
    })
})

//s
router.get('/:id', (req, res)=>{
    Ciat.findById(req.params.id, (err, foundCiat)=>{
        if (err) {
            res.status(500).send({
                err: error.message
            })
        } else {
            res.render('ciat/Show', {
                ciat: foundCiat
            })
        }
    })
})







module.exports = router