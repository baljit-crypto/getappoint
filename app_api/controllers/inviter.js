const mongoose = require('mongoose');
const inviter = mongoose.model('inviter');



const createInviter = async function(req,res){
    const {username, businessName, email, phone, timezone, businessImage} = req.body;
    await inviter.create({
        username: username,
        businessName: businessName,
        email: email,
        phone: phone,
        timezone: timezone,
        businessImage: businessImage,
    },(err,data) => {
        if(err){
            res.status(404).json(err);
            return;
        }else{
            res.status(200).json({
                username: data.username,
                businessName: data.businessName,
                email: data.email,
                phone: data.phone,
                timezone: data.timezone,
                businessImage: data.businessImage,
            });
        }
    })
    };

const getInviters = async (req,res) => {
    await inviter.find().exec(function(err,data){
        if(err){
            res.status(404).json(err);
            return;
        }
        res.status(200)
        .json(data)
    })
}


const getInviterById = async (req,res) => {
    if(!req.params.inviterid){
        res
        .status(404)
        .json({
         "message":"Not Found, inviter id is required"
     })
     return;
    }
    await inviter.findById(req.params.inviterid)
    .exec((err,data) => {
        if(err){
            res.status(404).json(err);
            return;
        }
        res.status(200)
        .json(data)
      })
}

    module.exports = {
        createInviter,
        getInviters,
        getInviterById
     };