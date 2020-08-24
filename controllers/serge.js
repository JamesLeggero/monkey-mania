const express = require('express')
const router = express.Router()
const Serge = require('../models/modules.js')

//i
router.get('/', (req, res)=>{
    // res.send('Serge microsite')
    Serge.find({}, (err, allSerge)=>{
        if(err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.render('serge/Index', {
                serges: allSerge
            })
        }
    })
})

//n
    router.get('/new', (req, res)=>{
        res.render('serge/New')
    })

//d
router.delete('/:id', (req, res)=>{
    Serge.findByIdAndRemove(req.params.id, (err, deletedSerge)=>{
        if (err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.redirect('/serge')
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
    Serge.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedSerge)=>{
        if (err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.redirect('/serge')
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

    Serge.create(req.body, (err, createdSerge)=>{
        if(err){
            res.status(500).send({
                error: err.message
            })
        } else {
            res.redirect('/serge')
        }
    })
})

//e
router.get('/:id/edit', (req, res)=>{
    Serge.findById(req.params.id, (err, sergeToEdit)=>{
        if (err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.render('serge/Edit', {
                serge: sergeToEdit
            })
        }
    })
})

//s
router.get('/:id', (req, res)=>{
    Serge.findById(req.params.id, (err, foundSerge)=>{
        if (err) {
            res.status(500).send({
                error: err.message
            })
        } else {
            res.render('serge/Show', {
                serge: foundSerge
            })
        }
    })
})







module.exports = router