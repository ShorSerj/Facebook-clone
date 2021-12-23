import Profile from '../models/profile.js';
import express from 'express'
const router = express.Router()


router.get('/', (req, res) => {
    const {name = 'Igor'} = req.query

    Profile.find({"fullName": name},(err, data) => {
            if (err) {     
                return res.status(400).json({ message: 'Error get profile', err}, console.log('asdasdsadd',req.query))
            }
            res.json(data[0])
    })
})

router.post('/', (req, res) => {
    const {name} = req.body
    let profile = new Profile({
        fullName: name, 
    })
    profile.save( err => {
        if(err) {
            console.log(req.body.fullNmae)
            return res.status(400).json({ message: 'Error create profile', err})
        }
        res.json({message: 'Profile was created'})
    })
})


export default router