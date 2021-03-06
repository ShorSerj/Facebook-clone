import dotenv from 'dotenv'
import db from 'mongoose';
dotenv.config()

db.connect(process.env.DB_CONNECT ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

export default db