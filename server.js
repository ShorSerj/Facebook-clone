import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import fs from 'fs';
import users from './routes/users.js';
import profile from './routes/profile.js';
import follow from './routes/follow.js';



const app = express(),
 port = process.env.PORT || 3000

app.use(morgan(process.env.LOG_LEVEL))
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(mongoSanitize())
app.use(cors())



fs.readdirSync('./routes/').forEach(file =>{
    app.use('/api/1.0/users/' , users)
    app.use('/api/1.0/profile/', profile)
    app.use('/api/1.0/follow/', follow)
})

app.listen(port, ()=>{
    console.log('Server started on http://localhost:' + port)
})
