const mongoose = require("mongoose");
const dribbleSchema = new mongoose.Schema({

    name:
    {
       type: String,
       require:true,

    },
    userNames:
    {
        type: String,
       require:true,
    },
    email:
    {
        type:String,
       
        require:true
    },
    password:
    {
        type: String,
       require:true,
    },
    image:
    {
        type: String,
       
    },
    location:
    {
        type:String,
        
    },
    designer:
    {
        type: Boolean,
       require:true,
    },
    hire:
    {
        type: Boolean,
       require:true,
    },
    inspire:
    {
        type: Boolean,
        require:true,
    }


    

})

module.exports = new mongoose.model("dribbleModels",dribbleSchema);
