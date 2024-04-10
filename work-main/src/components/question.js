import React, { useState } from 'react'
import Hire from "../internship project/hire.png"
import Designer from "../internship project/designer.png"
import Inspire from "../internship project/inspire.png"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Question = () => {
  const [checked1,setChecked1] = useState("k")
  const [checked2,setChecked2] = useState("k")
  const [checked3,setChecked3] = useState("k")
  var [finishin,setFinishin] = useState("false");
  const navigate = useNavigate();
  if(checked1 !== "k" || checked2 !== "k" || checked3 !== "k" )
  {
     finishin = "true";
  }

  const submit = async () =>
  { var designer1 = false;
    var hire1 = false;
    var inspire1 = false;

    if(checked1 !== "k" || checked2 !== "k" || checked3 !== "k" )
    { if(checked1 !== "k" )
        {
           designer1 = true;
        }

        if(checked2 !== "k")
        {
           hire1 = true;
        }

        if(checked3 !== "k")
        {
           inspire1 = true;
        }
     
      const userNames = sessionStorage.getItem("userNames");
      try{
        const email = sessionStorage.getItem("email");
       const dashboard = await axios.put(`http://work22-tau.vercel.app/signup_`,{email,userNames,designer1,hire1,inspire1})
       
       navigate("/mailMessage");
     }
     catch(err)
     {  
       console.log("the error",err);
     }
    }
  }
  const heading =
  {
    textAlign : "center",
    fontWeight:"900",
    fontFamily: "emoji",
    margin:"3%"
  }


  const option =
  {
    display: "flex",
    flexDirection: "row",
    margin:"auto",
    width: "80%",
    marginTop:"1%",
    justifyContent:"space-around",
    height:"fit-content",
   
    

  }
  const designer =
  {
    border:"0.5px solid grey",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:"10px",
    height:"fit-content",
    textAlign:"center",
    padding: "2px",
   
  

  }
  const designer_ =
  {
    border:"2px solid #f50fa0",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:"10px",
    height:"fit-content",
    textAlign:"center",
    paddingBottom: "2px",
    
   

  }

  const hire =
  {
    border:"0.5px solid grey",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:"10px",
    height:"fit-content",
    textAlign:"center",
    paddingBottom: "10px",
   
  }
  const hire_ =
  {
    border:"2px solid #f50fa0",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:"10px",
    marginLeft:"5%",
    textAlign:"center",
    paddingBottom: "10px",
    height:"fit-content",
   
  }

  const inspire =
  {
    border:"0.5px solid grey",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:"10px",
    textAlign:"center",
    paddingBottom: "10px",
    height:"fit-content",
    
    
  }
  const inspire_ =
  {
    border:"2px solid #f50fa0",
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:"10px",
    marginLeft:"5%",
    textAlign:"center",
    paddingBottom: "10px",
    height:"fit-content",
  }
  const createButton =
  {
      width:"180px",
     height:"40px",
     border:"none",
     fontWeight:"700",
     color:"white",
     backgroundColor:"#f50fa0",
     borderRadius:"10px",
     position :"relative",
     left:"43%",
     margin:"6px"
    

  }
  const createButton_ =
  {
      width:"180px",
     height:"40px",
     border:"none",
     fontWeight:"700",
     color:"white",
     backgroundColor:"pink",
     borderRadius:"10px",
     position :"relative",
     left:"40%",
     margin:"50px"
    

  }
  const returnBack =
  {
    textDecoration:"none",
    color:"gray",
    fontWeight:"700",
    marginTop:"1%",
    marginBottom:"2px",
    position:"relative",
    top:"44px",
    left:"30%"
  }
  const checkbox_ =
  {
    position:"relative",
    top:"2%"
  }
  const checkbox =
  {
    position:"relative",
    top:"7%"
  }
  return (
    <div>
        <p style={{fontSize:"120%", fontWeight:"700",fontFamily:"cursive",color:"#f50fa0", margin:"3%"}}>dribbble</p>
        <div style={heading}>
           <h1>What brings you to the Dribbble?</h1>
           <p style={{color:"gray"}}>Select the options that best describes you. Don't worry, you can explore other options later.</p>
        </div>
        <form onSubmit={submit}>
        <div style={option} id='question-option'>
           {checked1 === "k" ? <div htmlFor="designer" style={designer} className='question-box'>
              <img src={Designer} alt='designer' width={300} height={200} />
              <h4>I'm a designer looking to share the work</h4>
              <input type='checkbox' id="termsAndCondition" name="checked1" value="designer" checked={checked1 ===  "designer"}  onChange={(e) => setChecked1(e.target.value)} />
            </div>:
            <div htmlFor="designer"  style={designer_} className='question-box'>
              <img src={Designer} alt='designer' style={{position:"relative", top:"-11%"}} width={300} height={170}/>
              <h4>I'm a designer looking to share the work</h4>
             
              <p>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration</p>
              <input type='checkbox' id="k" name="checked1" value="k"  onChange={(e) => setChecked1(e.target.value)} 
              />
            </div>}

            {checked2 === "k" ?<div style={hire} className='question-box'>
              <img src={Hire} alt='job' width={300} height={200}/>
              <h4>I'm looking to hire a designer</h4>
              <input type='checkbox' id='job' style={checkbox} name="checked2" value="hire" checked={checked2 ===  "hire"}  onChange={(e) => setChecked2(e.target.value)} />
             
            </div>:
            <div style={hire_} className='question-box'>
              <img src={Hire} alt='job' width={200} height={165} style={{position:"relative", top:"-11%"}}/>
              <h4>I'm looking to hire a designer</h4>
              
              <p>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration</p>
              <input type='checkbox' id='job' style={checkbox_} name="checked2" value="k"  onChange={(e) => setChecked2(e.target.value)} />
            </div>}
            {checked3 === "k" ? <div style={inspire} className='question-box'>
              <img src={Inspire} alt='inspire' width={300} height={200}/>
              <h4>I'm looking for design inspiration</h4>
              <input type='checkbox' id='inspire' style={checkbox} name="checked3" value="inspire" checked={checked3 ===  "inspire"}  onChange={(e) => setChecked3(e.target.value)}/>
             
            </div>:
            <div style={inspire_} className='question-box'>
              <img src={Inspire} alt='inspire' width={300} height={165} style={{position:"relative", top:"-17%"}}/>
              <h4>I'm looking for design inspiration</h4>
              
              <p>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration</p>
              <input type='checkbox' id='inspire' style={checkbox_} name="checked3" value="k"  onChange={(e) => setChecked3(e.target.value)} />
            </div>}
        </div>
        <div id='question-finish-button'>
          {finishin === "true"? <div id='question-finish-button2'><p style={{position:"relative",left:"40%"}} ><b>Anything else? you can select multiple options.</b></p>
         <Link to="/mailMessage"><button type= "submit" style={createButton} onClick={submit}>Finish</button></Link> <Link to="/dashboard" style={returnBack} >or return back</Link></div>:
          <button type= "submit" style={createButton_} disabled id='question-finish-button1'>Finish</button>}
       </div>
       </form>
    </div>
  )
}

export default Question
