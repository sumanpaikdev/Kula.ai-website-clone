import React, {useState} from "react";
import KulaOutreact from "./KulaOutreact";
import VideoPart from "./VideoPart";

import videoFirst from "../assets/videoFirst.mp4";
import videoSecond from "../assets/videoSecond.mp4";
import videoThird from "../assets/videoThird.mp4";


function Main() {
  const [one, setOne] = useState(true)
  const [two, setTwo] = useState(true)

  function calculateScrollCount() {

    if(window.scrollY >= 0 && window.scrollY < 1060){
      setOne(true)
      setTwo(true)

    }else if(window.scrollY > 1068 && window.scrollY < 1900){
      setOne(true)
      setTwo(false)
      
    }else if(window.scrollY > 1900){
      setOne(false)
      setTwo(false)
    }

    console.log(window.scrollY)
  }

  window.addEventListener("scroll", calculateScrollCount)
  
  
  return (
    <div className="main">
      <KulaOutreact />
      {(one === true && two === true) && <VideoPart updateVideo={videoFirst}/>}
      {(one === true && two === false) && <VideoPart updateVideo={videoSecond}/>}
      {(one === false && two === false) && <VideoPart updateVideo={videoThird}/>}
    </div>
  );
}
export default Main;


// 0 - 1068
//1069 - 2009
// 2010