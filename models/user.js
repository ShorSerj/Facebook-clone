import db from '../ext/db.js'

const locationSchema = new db.Schema({
    country: {       
        type:String,
        required:true,
    },
    city: {
        type:String,
        required:true,
    }
})

const schema = new db.Schema({
    photoUrl: {
        type:String,
        required:true,
    },
    followed: {
        type: Boolean,
        default: false
    },
    fullName: {
        type:String,
        required:true,
        maxlength: 255,
        minlength: 2,
    },
    password : {
        type: String,
        required: true
    },
    status: {
        type:String,
        required:true,
        maxlength: 255,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
    location:  [locationSchema]
})


export default db.model('User', schema)