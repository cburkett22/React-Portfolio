import React from "react";
import Background from "../../img/background.JPG"
import "./style.css";

var divStyle = {
  backgroundImage: `url(${Background})`
};

function Hero(props) {
  return (
    <div className="hero text-center" style={ divStyle }>
      {props.children}
    </div>
  );
}

export default Hero;