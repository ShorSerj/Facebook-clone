import User from '../models/user.js';
import express from 'express'
const router = express.Router()

router.post('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {runVlidators: true}, (err, data) => {
            if (err) {
                return res.status(400).json({ message: 'Error get index user', err})
            }
            data.followed = true
            console.log(data)
            res.json({ message: 'Users followed', err})
    })
})


export default router