const DribbleModel = require("../modules/dribbleSchema");
const express = require("express");
const route = express.Router();
const multer  = require('multer')
const nodeMailer = require("nodemailer");

route.get("/getAllCustomers", async (req,res)=>{
    const user = await DribbleModel.find({});
    return res.json(user).status(200);
})

route.post("/signup66", async (req,res)=>{
   console.log(req.body);
    const user = new DribbleModel(req.body);
   const userNames = req.body.userNames;
   
  
    try {
        
            const isMatch = await DribbleModel.findOne({userNames});
            
            if(!isMatch)
            { 
            const push = await user.save();
            console.log(push);
            res.status(200).json(push);
            }
            else
            {   
                res.status(400);
            }
        
    } catch (error) {
       res.json(error);
    }
   
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../work-main/public/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() ;
      cb(null,  uniqueSuffix+file.originalname);
    }
  }
)
  
  const upload = multer({ storage: storage })
 
 
route.put("/signup__", upload.single('image') ,async (req,res) =>
{  
    try {
       
        const imageName =  req.file.filename;
        console.log(imageName);
        const isMatch = await DribbleModel.findOneAndUpdate({userNames:req.body.userNames},{image:imageName},{
            new:true
        });
        console.log(isMatch,"kk");
        if(isMatch)
        { cloudinary.api.resources({ type: 'upload' }, function(error, result) {
            if (error) {
              console.error('Error:', error);
            } else {
              console.log('Resources:', result.resources);
            }
          });
            res.sendStatus(200);
        }
        else
        {
            res.status(400).send("errorkhushi");
        }
    } catch (error) {
        res.send(error);
    }
    
})

route.put("/signup" ,async (req,res) =>
{  console.log(req.body.userNames);
    
    try {
        
        const isMatch = await DribbleModel.findOneAndUpdate({userNames:req.body.userNames},{location:req.body.locations},{
            new:true
        });
        console.log(isMatch);
        if(isMatch)
        { 
            res.sendStatus(200);
        }
        else
        {
            res.status(400).send("errorkhushi");
        }
    } catch (error) {
        res.send(error);
    }
})

route.get("/:userNames", async(req,res)=>
{  const userNames = req.params.userNames;
    const userNames_ = userNames.replace(":","");
   
    try {
        const images = await DribbleModel.findOne({userNames:userNames_});
        
        res.status(200).send(images);
    } catch (error) {
        res.send(error);
    }
})
async function sendMail_(email)
{
    const transporter = nodeMailer.createTransport({
        service:"gmail",
        auth:{
            user:"kj365268@gmail.com",
            pass:"zcflcjbtgtufkrdu"
        }
    })

    const mailOption =
    {
        from:"kj365268@gmail.com",
        to:email,
        subject:"Please verify your email",
        text:"click on this link",
    }

    try {
        const sending = await transporter.sendMail(mailOption);
        console.log("sucees");
    } catch (error) {
        console.log(error);
    }
}

route.put("/signup_",async (req,res) =>
{
    try {
        
        const isMatch = await DribbleModel.findOneAndUpdate({userNames:req.body.userNames},{designer:req.body.designer1,hire:req.body.hire1,inspire:req.body.inspire1},{
            new:true
        });
        if(isMatch)
        {   sendMail_(req.body.email);
            res.sendStatus(200);
        }
    } catch (error) {
        console.log(error);
    }
})
 
module.exports = route;
