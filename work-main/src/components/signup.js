import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Image1 from "../internship project/imag1.png"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const Signup = () => {
  const [name , setName] = useState("");
  const [userNames, setUserNames] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [checked_,setChecked_] = useState("");
  const [errors,setErrors] = useState("");
  var [sub,setSub] = useState(false);
  const navigate = useNavigate();
  if(name !== "" && userNames !== "" && email !== "" && password.length > 6 && checked_ === "privacy" )
  { 
    sub = true;
  }
axios.defaults.withCredentials = true;
  const submit = async () =>
  {
   try{
    const data = {name,userNames,email,password};
    
    
    const signup_ = await axios.post("https://work22-tau.vercel.app/signup66",data);
  
    // const signup = await fetch(`http://localhost:5000/signup66`,{
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body : {name,userNames,email,password}
    // });

     
     console.log(signup_);
     
      if(signup_.status == 200)
      {
      
       sessionStorage.setItem("userNames",userNames);
       sessionStorage.setItem("email",email);
      
       navigate("/dashboard");
      
    }
      else
     {
      
      setErrors("Username already exist");
     
      }
    
    
   
  }
  catch(err)
  {   alert(err);
    console.log(err);
  }
  }
    const div = 
    {
        display: "flex",
        width:"100%",
        height: "100vh",
        backgroundColor:""
         
    }
    const div_1 = 
    {
        backgroundColor:"#facd6b",
        width:"30%",
        height: "100%",
        padding: "50px",
        color: "rgb(160, 82, 45)",
        fontFamily:"Lucida Grande, sans-serif",
        fontSize:"15px",
        fontWeight: "900",
    }

    const heading =
    {
      fontSize: "32px",
      fontWeight: "400",
      fontFamily:"Bradley Hand, cursive"
    }

    const image1 =
    {
      position:"relative",
      left:"-60px"
    }

    const div_2 = 
    {
        backgroundColor:"white",
        width:"70%",
        height: "100%",
        fontFamily:"Lucida Grande, sans-serif"
        
    }

    const signIn =
    { display:"flex",
      justifyContent:"flex-end",
      padding:"10px",
      paddingRight:"10px"
    }
   
    const signUp =
    {
      display:"flex",
      justifyContent:"center",
    }

    const form =
    {
      display: "flex",
      justifyContent: "space-between",
      flexDirection:"column",
      width: "60%"
    }
    const label = 
    {
      fontWeight:"750",
      color:"black",
      paddingTop:"5px",
      paddingBottom:"5px"
    }
    const userName =
    {
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:"80%",
      flexWrap: "wrap"
      

    }
    const userName1 =
    {
      display:"flex",
      flexDirection:"column",
      width:"50%"

    }
    const userName2 =
    {
      display:"flex",
      flexDirection:"column",
      width:"45%"
     

    }

    const label1 = 
    {
      border:"none",
      backgroundColor:"#e6e4e3",
      height:"35px",
     
      borderRadius:"7px",
      fontWeight:"500px",
      outline:"none"
    }

    const input =
    {
      border:"none",
      backgroundColor:"#e6e4e3",
      height:"35px",
      width:"80%",
      borderRadius:"7px",
      fontWeight:"500px",
      outline:"none"
    }
    const note =
    {
      color:"grey",
      fontSize:"12px",
      fontWeight:"400"
    }


    const createButton =
    {
        width:"180px",
       height:"40px",
       border:"none",
       fontWeight:"700",
       color:"white",
       backgroundColor:"#f50fa0",
       borderRadius:"10px"
    }
    const createButton_ =
    {
        width:"180px",
       height:"40px",
       border:"none",
       fontWeight:"700",
       color:"white",
       backgroundColor:"pink",
       borderRadius:"10px"
    }
    const terms =
    {
      color:"gray",
      paddingTop:"20px",
      paddingBottom:"20px",
      width:"80%"
      
    }
  return (
    <div style={div}>
      <div style={div_1} id='signin'>
        <h3 style={heading}>dribbble</h3>
        <h1>Discover the world's top<br/>Designers & Creatives</h1>
        <img src={Image1} alt = "computer" height={400} width={550} style={image1}/>
        <p>Art by <u>Peter Tarka</u></p>
      </div>
      <div style={div_2} id='signin-2'>
         <div style={signIn}>
          <p>Already a memeber?  <Link to="/dashboard" >Sign in</Link></p>
          
         </div>
         <div style={signUp} id='signup'>
         
         <form style={form} id='signin-form' onSubmit={submit}>
         <h2 style={{fontWeight:"800"}}>Sign up to Dribbble</h2>
         <p style={{color:"red"}}>{errors}</p>
            <div style={userName} id='username'>
            <div style={userName1} id='username1'>
            <label style={label}>Name</label>
            <input type='text' placeholder=' Enter your name' style={label1} name='name' onChange={(e) => setName(e.target.value)} id='label'/>
            </div>
            <div style={userName2} id='username2'>
            <label style={errors === "" ?label:{color:"red",fontWeight:"750",
      
      paddingTop:"5px",
      paddingBottom:"5px"}}>Username</label>
            <input type='text' placeholder=' Create your userName' style={label1} name='userNames' onChange={(e) => setUserNames(e.target.value)} id='label'/><br/>
            </div>
            </div>
            <label style={label}>Email</label>
            <input type='email' placeholder=' Enter your email' style={input} name='email' onChange={(e) => setEmail(e.target.value)} id='email' className='emaily' /><br/>
            <label style={label}>Password</label>
            <input type='password' placeholder='  6+ characters' style={input} name='password' onChange={(e) => setPassword(e.target.value)} id='label'/><br/>
            <span style={terms}>
            <input type='checkbox' id="termsAndCondition" name="checked_" value="privacy" checked={checked_ ===  "privacy"}  onChange={(e) => setChecked_(e.target.value)} />
            <label htmlFor='termsAndCondition' >Creating an account means you're okay with our <Link to="/">Terms of services</Link>,
            <Link to="/">Privacy Policy</Link>, and our default <Link to="/">Notification settings</Link>.</label>
            </span>
            {sub === false ?<button style={createButton_} disabled>Create Account</button>:<Link to=""><button type="submit" style={createButton} onClick={submit}>Create Account</button> </Link>}
            <p style={note}>This site is protected by reCAPTACHA and the Google<br/> <Link to="/">Terms of services</Link> and  <Link to="/">Privacy Policy</Link>.</p>
         </form>
         </div>
      </div>
    </div>
  )
}


export default Signup
