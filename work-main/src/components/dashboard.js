import React, { useState } from 'react'
import Dp from "../internship project/dp.png"
import {Link, Routes,Route, useNavigate} from "react-router-dom"
import Header from "./header"
import axios from 'axios';
import replace from 'loose-envify/replace';

const Dashboard = () => {
var [image, setImage] = useState(null);

const [profile,setProfile] = useState("");
const [locations, setLocations] = useState("");
var [button, setButton] = useState(false)
const navigate = useNavigate();
const submit = async () =>
  { 
    const userNames = sessionStorage.getItem("userNames");
    
   try{
   
   
   const res = await axios.put("http://localhost:5000/api/signup/signup",{userNames,locations})
   
   
   const formData = new FormData();
   formData.append("userNames",userNames);
   formData.append("image",image);
  console.log(image);
   try {
   
     
     const res = await axios.put(`http://localhost:5000/api/signup/signup__`,formData,{
       
       headers: {
       'Content-Type': 'multipart/form-data'
     }
       
     })
    
   } catch (error) {
     console.log(error);
   }

    
    
    
  }
  catch(err)
  {  
    console.log("the error",err);
  }
  }
  const changing = async (e) =>
  {
    
    setImage(e.target.files[0]);
    
  

  }
if(locations !== "")
{
  button = true;
}
  const heading =
  {
    
    padding: "1%",
    fontSize: "24px",
    fontFamily:"cursive",
    color: "#f50fa0",
    margin:"2%"
  }
  const content =
  {
    margin: "auto",
    width: "35%",
    marginTop:"50px",
    fontFamily:"Lucida Grande, sans-serif",
    
  }
  const content_ =
  {
    paddingBottom:"20px"
  }
  const choose =
  {
    paddingLeft:"15px",
    color:"gray"
  }
  const profilePic =
  {
    display: "flex",
    flexDirection: "row",
   
  }

  const location =
  {
    marginTop:"5%",
    fontWeight:"900",
    display:"flex",
    flexDirection:"column",
    justifyContent: "between",
    
  }

  const label =
  {
    border:"none",
    borderBottom:"2px solid gray",
    outline:"none",
    fontSize:"20px",
    fontWeight:"700px"
  }

  const createButton =
  {
       width:"180px",
       height:"35px",
       border:"none",
       fontWeight:"700",
       color:"white",
       backgroundColor:"#f50fa0",
       borderRadius:"10px",
       marginTop:"10%"
  }
  const createButton_ =
  {
       width:"180px",
       height:"35px",
       border:"none",
       fontWeight:"700",
       color:"white",
       backgroundColor:"pink",
       borderRadius:"10px",
       marginTop:"10%"
  }

  const ableButton =
  {
    display: "flex",
    flexDirection:"column"
  }

  const returnBack =
  {
    textDecoration:"none",
    color:"gray",
    fontWeight:"700",
    marginTop:"2%"
  }
  return (
    <div>
      <div>
        <p style={heading}><i>dribbble</i></p>
      </div>
      <div style={content} >
      <div style={content_} id='dashboard-content'>
      <h1>Welcome! Let's create your profile</h1>
      <p>Let others get to know your better! You can these later</p>
      </div>
      
      <h3>Add an avtar</h3>
      <form onSubmit={submit} method="post" enctype="multipart/form-data">
      <div style={profilePic} id='dashboard-choose-image'>
      {profile === "" ?<img src={Dp} alt='user avtaar' width={150} height={150}/>:<img src={profile} alt='user avtaar' width={250} height={250} style={{borderRadius:"10px"}}/>}
      <div style={choose} >
      <label htmlFor='image'/>
      <input type='file' id='image'  filename="image" onChange={changing} accept="image/*"/>
      <p>  or choose one of our default</p>
      </div>
      </div>
      <div style={location}>
        <label>Add your location</label><br/>
        <input type='text' placeholder='Enter the location' style={label} name='location' onChange={(e)=>setLocations(e.target.value)}/>
      </div>
     {button === true?<div style={ableButton}><Link to="/question"><button type='submit' style={createButton} onClick={submit}>Next</button></Link><Link to="/" style={returnBack} >or return back</Link></div>:<button type='submit' style={createButton_} disabled>Next</button>}
     </form>
      </div>
      <Routes>
          <Route exact path='/header' element={<Header image={profile}/>}></Route>
      </Routes>
    </div>
  )
}

export default Dashboard
