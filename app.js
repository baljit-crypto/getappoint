const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const path = require('path');


require('dotenv').config()
require('./app_api/models/db')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*',(req,res) => {
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
    })
}



const userRoute = require('./app_api/routes/user');
const inviterRoute = require('./app_api/routes/inviter');
app.use('/api',userRoute);
app.use('/api',inviterRoute);


app.listen(PORT, function(){
    console.log(`app is listening to ${PORT}`)
})