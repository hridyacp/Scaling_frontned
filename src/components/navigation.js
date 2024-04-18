import { useEffect, useRef, useState } from "react";
import ghoLogo from '../Assets/logobg.png';
import menu from '../Assets/Menu.png';
import { Grid } from "@mui/material";
import Menu from "./Menu";
import Burger from "./Burger";
import FocusLock from 'react-focus-lock';

function Navigation({setAccount,setIsConnected,isConnected}) {
    const [open, setOpen] = useState(false);
    const node = useRef();
const connectWallet=async()=>{      
    if (window.ethereum) {
        try{
     const accounts= await window.ethereum.request({ method: 'eth_requestAccounts' });
     console.log(accounts,"accounts")
     if(accounts.length>0){
     setAccount(accounts[0])
     localStorage.setItem("walletAddress",accounts[0]);
     setIsConnected(true);
     }
     else{
        setIsConnected(false);
     }
    }
    catch{
        console.log("user refused to connect")
    }
     //If yes
     //setIsConnected(true);
     //setIsNickName(false)
     //else
   
     //send another api with nickname and wallet address
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
    else{
        alert("Please install metamask");
        window.open('https://metamask.io/','_blank')
    }
  }
  useEffect(()=>{
    if(window.ethereum){
     window.ethereum.on('accountsChanged', (accounts) => {
     if(accounts?.length===0){
     localStorage.clear();
     setIsConnected(false);
     }
   });
    }
   },[])
   useEffect(()=>{
    if(localStorage.getItem("walletAddress")!==null && localStorage.getItem("walletAddress")!=='' && localStorage.getItem("walletAddress")!==undefined){
      setIsConnected(true)
    }
       else{
        setIsConnected(false)
       }
    },[])
   
  return (
    <div className="sticky p-0 flex justify-between">
        <img width="150px" height="20px" src={ghoLogo} alt="ghologo" />
       {/* {!open &&
        <div>
           <button onClick={()=>setOpen((prev)=>!prev)}>
        <img width="55px" height="55px" src={menu} alt="menu"/>
        </button>
       </div>
       }
        {open &&
          <Menu opne={open} setOpen={(open)=>setOpen(open)}/>
        } */}
         {/* <div ref={node}>
        <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen}  />
            <Menu open={open} setOpen={setOpen}  />
          </FocusLock>
          </div> */}
    {/* {!isConnected?
  <button className="button-connect" style={{"&:hover": { color: 'black',backgroundColor:"#4E9282"},}} onClick={connectWallet}>CONNECT WALLET</button>
  : <><Grid item xs={2} alignContent={"center"} justifyContent={"center"} alignItems={"center"}>
  <img width="55px" height="55px" src={user} alt="user" style={{opacity:"1"}} />
  </Grid>
  </>} */}
 
  </div>
  )
}
export default Navigation;