import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import email from "../internship project/email.png"
import Header from "./header"
import Footer from "./footer"
const mailMessage = (props) => {
  
  const emails = sessionStorage.getItem("email");
 
  const mailMessage_ =
  {
    margin:"auto",
    width:"40%",
    textAlign: "center",
    marginTop:"1%",
    width: "50%",
    height: "50%"
  }

  const p_ =
  {
    color:"grey"
  }

  const links = 
  {
    textDecoration:"none",
    color:"#f50fa0",
    fontWeight:"600"
  }
  return (
    <div>
    <Header />
    <div style={mailMessage_}>
        <h2>Please verify your email...</h2>
        <img src={email} alt='email' height={100} width={100} />
        <p style={p_}>Please verify your email address. We've sent a confirmation email to:</p>
        <p><b>{emails}</b></p>
        <p style={p_}>Click the confirmation link in that email to begin using dribble.</p>
        <p style={p_}>Didn't receive the email? Check your spam folder, It may have caught by a 
        filter. If you still don't see it, you can <Link to="/" style={links}>Resend the confirmation email.</Link></p>
        <p style={p_}>Wrong email address?<Link to="/" style={links}> Change it</Link></p>
    </div>
    <Footer/>
    </div>
  )
}

export default mailMessage
