import { Grid } from "@mui/material";
import { useState } from "react";
import "./home.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

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
<Grid item container xs={12} className="pt-8">
<Grid item xs={5} alignItems={"center"} justifyContent={"center"} alignContent={"center"}>
<div className="text-white text-6xl font-bold text-left flex justify-end pb-8">
    
Where Trust Gets A  <br /> Digital Passport

</div>
<div className="text-left pl-28 pt-4">
    <button className="bg-zinc400 rounded-md p-2 pl-4 pr-4 text-sm font-bold">Get Started</button>
</div>
</Grid>
<Grid item xs={7} style={{height:"600px",width:"350px"}} alignContent={"flex-start"}>
<model-viewer
    src="./astronaut.glb" alt="astronaut"
    camera-orbit="45deg 55deg" 
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
    <div className="flex gap-6 justify-center">
    <div className="flex flex-col gap-10">
<Card >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    <div className="flex flex-col gap-2 justify-center">

    <Card >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    </div>
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