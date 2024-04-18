import { Grid } from "@mui/material";
import { useState } from "react";
import "./home.css";
import Cards from "../components/Cards/cards";

const { default: Navigation } = require("../components/navigation");

function Home(){
    const [account,setAccount]=useState("");
    const [isConnected,setIsConnected]=useState(false);

    return(
<>
<div container className="flex flex-col justify-between gap-0">
    {/* <Grid item xs={12} className="sticky"> */}
<Navigation account={account} setIsConnected={(isConnected)=>setIsConnected(isConnected)} isConnected={isConnected}/>
{/* </Grid>
<Grid item container xs={12} className="pt-6">
<Grid item xs={5.5} alignItems={"center"} justifyContent={"center"} alignContent={"center"}> */}
<div className="flex justify-around pl-4 pr-4 pb-8">
<div className="text-white text-6xl font-bold text-left flex flex-col justify-start pt-44 ">
    
Where Trust Gets A  <br /> Digital Passport


<div className="text-left pl-40 pt-4">
    <button className="bg-zinc400 rounded-md p-2 pl-4 pr-4 text-sm font-bold">Get Started</button>
</div>
</div>

{/* </Grid> */}
{/* <Grid item xs={6.5} style={{height:"850px",width:"450px",display:"flex",justifyContent:"flex-start"}} alignContent={"flex-start"}> */}
<div style={{ objectFit: "contain",height: "1200px",width:"auto" ,display:"flex",justifyContent:"flex-start",flexDirection:"column"}}>
<model-viewer
style={{width:"inherit",width:"450px",paddingBottom:"32rem",display:"flex",justifyContent:"flex-start"}}

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
    <Grid item container xs={10} spacing={2} className="card-container p-2 pt-2">
    <Grid item xs={6} className="border-r border-r-solid border-r-1 border-r-white">
        <div className="text-white font-bold p-4 text-left mt-14">
This is an open source project found on github (requires developer experience to set up and configure). This website provides a little extra functionality to allow users to easily register and manage their own data sets.<br/> It helps fund the open source project, so thanks for signing up!
This is an open source project found on github (requires developer experience to set up and configure).<br/> This website provides a little extra functionality to allow users to easily register and manage their own data sets. It helps fund the open source project, so thanks for signing up!
This is an open source project found on github (requires developer experience to set up and configure).<br/>
</div>
</Grid>
<Grid item xs={6} alignContent={"center"} justifyContent={"center"}>
  <Cards />
</Grid>
</Grid> 
     <Grid item xs={1}>

</Grid>
</Grid>
{/* </Grid> */}
</div>
</>
    )
}
export default Home;