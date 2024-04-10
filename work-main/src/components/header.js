import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Dp from "../internship project/dp.png"
import { useState } from 'react'
import axios  from 'axios'
const Header = (props) => {
  const [profile,setProfile] = useState("");
  const header_ =
  {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    marginLeft:"2%",
    marginRight:"2%",
    marginTop:"0.5%",
    
    
  }

  const header1 =
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "40%",
    justifyContent:"space-between",
    
  }

  const header2 =
  {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width:"20%",
    justifyContent:"space-between",
    
  }

  const links = 
  {
    textDecoration:"none",
    color:"gray"
  }

  const search = 
  {
    width:"35%",
    height: "50%",
    backgroundColor: "#e6e4e3",
    border:"none",
    borderRadius: "10px",
    marginTop:"3%"
  }

  const upload =
  {
    border:"none",
    width:"21%",
    height:"40px",
    marginTop:"3%",
    color:"White",
    backgroundColor:"#f50fa0",
    fontWeight:"600"
  }
  useEffect(()=>
{
  change();
},[])
  const change = async () =>
  {const userNames = sessionStorage.getItem("userNames");
    try {
      const resImage = await axios.get(`http://localhost:5000/api/signup/find-image/:${userNames}`)
    
      
       console.log(resImage);
       
       setProfile(resImage.data.image);
       console.log(profile);
    } catch (error) {
      
    }
  }
  return (
    <div style={header_} className='header'>
      <div style={header1}  id='header1'>
        <p style={{fontSize:"120%", fontWeight:"700",fontFamily:"cursive"}}><i>dribbble</i></p>
        <p ><Link to="/" style={links}>Inspiration</Link></p>
        <p > <Link to="/" style={links}>Find work</Link></p>
        <p ><Link to="/" style={links}>Learn design</Link></p>
        <p ><Link to="/" style={links}>Go pro</Link></p>
        <p ><Link to="/" style={links}>Hire designers</Link></p>
      </div>
      <div style={header2} id='header2'>
        <input type='text' placeholder=' search' style={search}/>
        
        <img src={profile} alt='your profile picture' width={60}  height={60} style={{borderRadius:"28px"}}/>
        <button style={upload}>Upload</button>
      </div>
    </div>
  )
}

export default Header
