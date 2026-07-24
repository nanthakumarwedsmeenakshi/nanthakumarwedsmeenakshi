import React,{useEffect, useState} from 'react'
import splashicon from './asset/splashIcon.png';
import { Link } from "react-router-dom";
function Splash() {
  const[load,setLoad] = useState(true);
  useEffect(()=>{
    setTimeout(myfunction, 5000);
  },[])
  function myfunction(){
    setLoad(false)
  };
  return (
    <div>
      {load ? <div id="initLoad"><div className="lds-heart"><div></div></div></div> :  <div className="container nowatermark">
        <div className="loadScreen">
         
         <div className="splashicon">
            <img src={splashicon} alt='img'/>
         </div>
         
            <Link to="/wedding"><button>CLICK TO JOIN WITH US</button></Link>
        </div>
       
    </div>}
     
    </div>
  )
}

export default Splash
