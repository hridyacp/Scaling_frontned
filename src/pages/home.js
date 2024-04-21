import { Grid } from "@mui/material";
import { useState } from "react";
import "./home.css";
import Cards from "../components/Cards/cards";
import { HashLink } from 'react-router-hash-link';
import ghoLogo from '../Assets/logobg.png';
import gitIcon from "../Assets/github.png";
import fbIcon from "../Assets/fb.png";
import LnIcon from "../Assets/ln.png";
import callIcon from "../Assets/call.png";
import gmailIcon from "../Assets/gmail.png";
import locIcon from "../Assets/location.png";
import vid from "../Assets/video.mp4";

const { default: Navigation } = require("../components/navigation");

function Home(){
    const [account,setAccount]=useState("");
    const [isConnected,setIsConnected]=useState(false);
    const modelWidth = {
        width: '450px',
        paddingBottom: "32rem",
        display:"flex",
        justifyContent:"flex-start",
        '@media (min-width: 1400px)' : {
            paddingBottom: "26rem",
        }
      }
    return(
<div>
<video autoPlay loop muted>
          <source src = {vid} type = 'video/mp4' autoPlay loop/>
          </video>
          <div className="absolute">
<div container className="flex flex-col justify-between gap-2">

<Navigation setAccount={(account)=>setAccount(account)} setIsConnected={(isConnected)=>setIsConnected(isConnected)} isConnected={isConnected}/>

{/* </Grid>
<Grid item container xs={12} className="pt-6">
<Grid item xs={5.5} alignItems={"center"} justifyContent={"center"} alignContent={"center"}> */}
<div id="section2" className="flex justify-around pl-4 pr-4 pb-8">
<div className="text-white text-6xl text-left flex flex-col justify-start pt-44 ">
    
Where Trust Gets A  <br /> Digital Passport


<div className="text-left pl-40 pt-4">
    <button className="bg-white rounded-md p-2 pl-4 pr-4 text-sm text-black font-bold hover:bg-pink hover:text-white" > <HashLink smooth to='/#section1' > Get Started </HashLink></button>
</div>
</div>

{/* </Grid> */}
{/* <Grid item xs={6.5} style={{height:"850px",width:"450px",display:"flex",justifyContent:"flex-start"}} alignContent={"flex-start"}> */}
<div style={{ objectFit: "contain",height: "1200px",width:"auto" ,display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
<model-viewer
style={modelWidth}

    src="./astronaut.glb" alt="astronaut"
    camera-orbit="45deg 55deg" touch-action="pan-y" autoplay animation-name="Running"
    >
</model-viewer>

</div>
</div>
{/* </Grid>
</Grid> */}
<Grid container xs={12}>
  <Grid item xs={1}>

  </Grid>
    <Grid item container xs={10} spacing={2} id='section1' className="card-container p-2 pt-2">
    <Grid item xs={6} className="border-r border-r-solid border-r-1 border-r-white">
        <div className="flex flex-col gap-4 text-white font-mont font-normal p-4 text-left mt-14">
          <div>About Us <br /></div>  
          <div>
This is an open source project found on github (requires developer experience to set up and configure). This website provides a little extra functionality to allow users to easily register and manage their own data sets.<br/> It helps fund the open source project, so thanks for signing up!
This is an open source project found on github (requires developer experience to set up and configure).<br/> This website provides a little extra functionality to allow users to easily register and manage their own data sets. It helps fund the open source project, so thanks for signing up!
This is an open source project found on github (requires developer experience to set up and configure).<br/>
</div>
</div>
</Grid>
<Grid item xs={6} alignContent={"center"} justifyContent={"center"}>
  <Cards />
</Grid>
</Grid> 
     <Grid item xs={1}>

</Grid>
</Grid>
<div className="flex justify-center text-white font-mont text-xl gap-10 mt-10 mb-4">
<div class="card card0">
    <div class="border">
      <h2>Built By: Shravan</h2>
      <div class="icons">
      <img className={"fa"} width={"40px"} height="40px" src={LnIcon} alt="linkdin" />
                                <img className={"fa"} width={"40px"} height="40px" src={fbIcon} alt="FB" />
                                <img  className={"fa"} width={"40px"} height="40px" src={gitIcon} alt="Git" />
      </div>
    </div>
  </div>

</div>
</div>
<div className="mt-16">
<footer className="footer-section">
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="flex justify-around">
                  
                        <div className="single-cta">
                        <img width={"40px"} height="40px" src={locIcon} alt="location" />
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
               
                  
                        <div className="single-cta">
                        <img width={"40px"} height="40px" src={callIcon} alt="call" />
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                 
                        <div className="single-cta">
                        <img width={"40px"} height="40px" src={gmailIcon} alt="gmail" />
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>mail@info.com</span>
                            </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo flex justify-center">
                               <img src={ghoLogo}  className="img-fluid" alt="logo" />
                            </div>
                           
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <div className="flex justify-around">
                                <img width={"40px"} height="40px" src={LnIcon} alt="linkdin" />
                                <img width={"40px"} height="40px" src={fbIcon} alt="FB" />
                                <img width={"40px"} height="40px" src={gitIcon} alt="Git" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2018, All Right Reserved Shravan</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </footer>
</div>
</div>
</div>
    )
}
export default Home;