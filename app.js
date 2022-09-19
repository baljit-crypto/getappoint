const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const path = require('path');
var router = express.Router();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(PORT, function(){
    console.log(`app is listening to ${PORT}`)
})