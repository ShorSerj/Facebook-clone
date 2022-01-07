import Profile from '../models/profile.js';
import express from 'express'
const router = express.Router()


router.get('/', (req, res) => {
    const {userId} = req.query
    Profile.find({'id': userId},(err, data) => {
            if (err) {     
                return res.status(400).json({ message: 'Error get profile', err}, console.log('asdasdsadd',req.query))
            }
            res.json(data[0])
    })
})

router.post('/', (req, res) => {
    const {name, id} = req.body
    let profile = new Profile({
        id,
        fullName: name,
    })
    profile.save( err => {
        if(err) {
            return res.status(400).json({ message: 'Error create profile', err})
        }
        res.json({message: 'Profile was created'})
    })
})


export default router