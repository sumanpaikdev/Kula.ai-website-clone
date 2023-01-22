import React, { useContext} from "react";
import TextItem from "./TextItem";
import { Context } from "../Context";

function VideoPart({updateVideo}) {
    const {content} = useContext(Context)
    const viewText = content.map(item => (<TextItem text={item} key={item.heading}/>))

  return (
    <section className="second-section">

      <div className="text-item">
        {viewText} 
        {/* Left side text are here */}
      </div>

      <div className="video-item">
        <div className="video-container">
          <video src={updateVideo} autoPlay loop muted />
        </div>
      </div>
    </section>
  );
}
export default VideoPart;
