require("dotenv").config()
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
const routes = require('./routes/routes');
const multer  = require('multer')
const nodeMailer = require("nodemailer");


const PORT = process.env.PORT || 5000;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://work22-p3i1.vercel.app');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

const corsOptions =
{
    origin:['https://work22-p3i1.vercel.app/'],
    Credential:true,
    port : PORT,
    optionSucessStatus:200
}


app.use(express.urlencoded({extended:false}))




app.use(cors(corsOptions));
app.use(express.json());
app.use('/api',routes);

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("succesfully connected to database Dribble"))
.catch((e)=>console.log(e));

/*const dribble = new mongoose.Schema({
    name:{
        type:String
    },
    userNames:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    loaction:{
        type:String
    },
    image:{
        type:String
    },
    designer:{
        type:Boolean
    },
    hire:{
        type:Boolean,
    },
    inspire:{
        type:Boolean
    }
})*/
/*const DribbleModel = new mongoose.model("dribbleModel",dribble)
//const DribbleModel = require("../modules/dribbleSchema");


app.post("/signup66", async (req,res)=>{
   
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
 
 
app.put("/signup__", upload.single('image') ,async (req,res) =>
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

app.put("/signup" ,async (req,res) =>
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

app.get("/findImage/:userNames", async(req,res)=>
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

app.put("/signup_",async (req,res) =>
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
})*/
 


app.listen(PORT,()=>{
    console.log("hello",PORT);
})

module.exports = app;
