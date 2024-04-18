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
<Grid container className="main-container" spacing={7}>
    <Grid item xs={12} style={{position:"sticky"}}>
<Navigation account={account} setIsConnected={(isConnected)=>setIsConnected(isConnected)} isConnected={isConnected}/>
</Grid>
<Grid item container xs={12} className="pt-6">
<Grid item xs={5.5} alignItems={"center"} justifyContent={"center"} alignContent={"center"}>
<div className="text-white text-6xl font-bold text-left flex justify-end pb-8">
    
Where Trust Gets A  <br /> Digital Passport

</div>
<div className="text-left pl-40 pt-4">
    <button className="bg-zinc400 rounded-md p-2 pl-4 pr-4 text-sm font-bold">Get Started</button>
</div>
</Grid>
<Grid item xs={6.5} style={{height:"650px",width:"350px",display:"flex",justifyContent:"flex-start"}} alignContent={"flex-start"}>
<model-viewer
    src="./astronaut.glb" alt="astronaut"
    camera-orbit="45deg 55deg" touch-action="pan-y" autoplay animation-name="Running"
    >
</model-viewer>
</Grid>
</Grid>
<Grid item container xs={12}>
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
</Grid>
</>
    )
}
export default Home;