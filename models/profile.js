import db from '../ext/db.js'

const schema = new db.Schema({
    fullName: {
        type:String,
        maxlength: 255,
        minlength: 2,
    }
})


export default db.model('Profile', schema)