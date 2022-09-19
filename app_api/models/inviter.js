const mongoose = require('mongoose');

const inviterSchema = new mongoose.Schema({
          username:{
                type: String,
                required: true
             },
           businessName:{
                type: String,
                required: true
           },  
          email:{
                type:String,
                required: true
            },
          phone:{
              type:Number,
              required: true
          },
          timezone:{
            type: String,
            required: true
          },
          businessImage:{
            type: String,
            required: true
          }
}); 



 

mongoose.model('inviter',inviterSchema);