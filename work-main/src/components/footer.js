import React from 'react'

const footer = () => {
  const footer_ =
  {
    display:"flex",
    flexDirection: "column",
    height: "50%"
  }

  const footer1 =
  {
    display:"flex",
    flexDirection: "row",
    margin:"2%",
    justifyContent:"space-between"
  
  }

  const footer1a =
  {
    width: "30%"
  }

  const footer2a = 
  {

  }

  const footer3a =
  {

  }

  const footer4a =
  {

  }

  const footer5a =
  {

  }

  const footer6a =
  {

  }
  const footer2 =
  {
    display:"flex",
    flexDirection:"row",
    margin:"11%"
    
  }

  const p_ =
  {
    color:"gray"
  }
  const footer2b =
  {   display:"flex",
  justifyContent: "flex-start",
  }
  const footer3b =
  {   
    marginLeft:"60%"
  }
  return (
    <div style={footer_} >
      <div style={footer1} id='footer'>
          <div style={footer1a}>
            <p style={{fontSize:"120%", fontWeight:"700",fontFamily:"cursive",color:"#f50fa0"}}>dribbble</p>
            <p style={p_}>Dribbble is world's leading community for creatives to share, grow and get hired.</p>
          </div>
          <div style={footer2a}>
            <p ><b>For designers</b></p>
            <p style={p_}>Go pro!</p>
            <p style={p_}>Explore design work</p>
            <p style={p_}>Design work</p>
            <p style={p_}>Overtime podcasts</p>
            <p style={p_}>Playoffs</p>
            <p style={p_}>Weekly Warm-Up</p>
            <p style={p_}>Refer a friend</p>
            <p style={p_}>Code of conduct</p>
          </div>
          <div style={footer3a}>
            <p ><b>Hire designers</b></p>
            <p style={p_}>Post a jon opening</p>
            <p style={p_}>Post a freelance</p>
            <p style={p_}>Search for designers</p>
            <p ><b>Brands</b></p>
            <p style={p_}>Advertise with us</p>
          </div>
          <div style={footer4a}>
            <p ><b>Company</b></p>
            <p style={p_}>About</p>
            <p style={p_}>Careers</p>
            <p style={p_}>Support</p>
            <p style={p_}>Media kit</p>
            <p style={p_}>Testimonials</p>
            <p style={p_}>API</p>
            <p style={p_}>Terms of services</p>
            <p style={p_}>Privacy policy</p>
            <p style={p_}>Cookie policy</p>
          </div>
          <div style={footer5a}>
            <div>
              <p ><b>Directories</b></p>
              <p style={p_}>Design Jobs</p>
              <p style={p_}>Designers for hire</p>
              <p style={p_}>Freelance Designers for hire</p>
              <p style={p_}>Tags</p>
              <p style={p_}>Places</p>
            </div>
            <div >
              <p ><b>Design assests</b></p>
              <p style={p_}>Dribble market place</p>
              <p style={p_}>Creative market</p>
              <p style={p_}>FontSpring</p>
              <p style={p_}>Font Squirrel</p>
            </div>
          </div>  
          <div style={footer6a}>
            <p ><b>Design resouces</b></p>
            <p style={p_}>Freelancing</p>
            <p style={p_}>Design Hiring</p>
            <p style={p_}>Design Portfolio</p>
            <p style={p_}>Design Education</p>
            <p style={p_}>Creative Process</p>
            <p style={p_}>Design Industy Trends</p>
          </div>
      </div><hr/>
      <div style={footer2}>
          <div style={footer2b}><p>&copy; 2023 Dribbble. All rights reserved</p></div>
          <div style={footer3b}><p><b>20,501853</b>shots dribbled</p>basketball</div>
      </div>
    </div>
  )
}

export default footer
