import User from '../models/user.js';
import express from 'express'
const router = express.Router()

router.get('/all', (req, res) => {
    User.find({}, (err, data) => {
        if(err) {
            return res.status(400).json({ message: 'Error get all user', err})
        }
        res.json(data)
    })
})
router.get('/', (req, res) => {
    const {page = 1, limit = 10 } = req.query
    const startIndex = (page-1) * limit
    const endIndex = page * limit

    User.find({followed:false},(err, data) => {
            if (err) {
                return res.status(400).json({ message: 'Error get index user', err})
            }
            let man = {}
            man.users = data.slice(startIndex, endIndex)
            man.totalCount = data.length
            res.json(man)
    })
})

router.post('/', (req, res) => {
    const {photoUrl,followed,fullName,password,status,created} = req.body
    const {country, city} = req.body.location
    let manuf = new User({
        photoUrl: photoUrl,
        followed: followed,
        fullName: fullName,
        password: password,
        status: status,
        created: created,
        location: {
            country: country,
            city: city
        }
       
    })
    manuf.save( err => {
        if(err) {
            console.log(err)
            return res.status(400).json({ message: 'Error create user', err})
        }
        res.json({message: 'User was created'})
    })
})
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(err) {
            return res.status(400).json({ message: 'Error get user', err})
        }
        res.json(data)
    })
})

router.put('/:id', (req, res) => {
    let regBody = {title: req.body.title}

    User.findByIdAndUpdate(req.params.id, {runVlidators: true}, (err, data) => {
        if(err) {
            return res.status(400).json({ message: 'Error update user', err})
        }
        res.json({
            message: 'Updated',
            id: data._id
        })
    })
})

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, (err, data) => {
        if(err) {
            return res.status(400).json({ message: 'Error delete user', err})
        }
        res.json({
            message: 'Deleted'
        })
    })
})

export default router