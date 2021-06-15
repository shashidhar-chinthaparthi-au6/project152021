require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')



const PORT = process.env.PORT || 80;
const app = express();

//body parser is going to parse some data out from incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


const mongoUri = 'mongodb://localhost:27017/newBadaProject'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err);
});

//test route to be accessed only if one has a valid jwt
app.post('/',(req, res) => {
    res.json({msg:"hello world"})
});


app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})