import express from "express";
// const routes = require('./routes/routes');
import fs  from 'fs';
import path from 'path';
import bodyParser  from'body-parser';
import cors from 'cors'

 // Use this after the variable declaration
const app = express();
const __dirname = path.resolve()

const PORT = process.env.PORT || 8000;

// Use Node.js body parsing middleware
app.use(cors())
app.use(express.static(__dirname + "/src"));
app.use(bodyParser.json());

fs.createWriteStream(__dirname + 'createHistory.txt')

app.get('/friends', (req, res) => {
    const fPath = path.resolve(__dirname, 'src/routes/response.json')

    fs.readFile(fPath, (err, data) => {
        if (err) {
            throw err;
        }
        res.type('json').send(data)
    })
});

// app.post('/fixTitleColumn', (req, res) => {
//     let id = req.body
//     for (let key in id) {
//         // console.log(key + ": " + id[key]);
//         fs.appendFile('createHistory.txt', key + ": " + id[key] + "   ", function (error) {
//             if (error) throw error;
//         });
//     }
//     res.send()
// });

// app.post('/fixTitleTask', (req, res) => {
//     let id = req.body
//     for (let key in id) {
//         // console.log(key + ": " + id[key]);
//         fs.appendFile('createHistory.txt', key + ": " + id[key] + "   ", function (error) {
//             if (error) throw error;
//         });
//     }
//     res.send()
// });

// Start the server
const server = app.listen(PORT, (error) => {
    if (error) {
        throw error
    }

    console.log(`Server listening on port ${PORT}`);
});