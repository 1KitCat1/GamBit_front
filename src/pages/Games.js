import React from 'react';
import BackgroundImg from "../imgs/airplane-big-dark.jpg"

function Games() {
      const backgoundImgStyle={
        backgroundImage: "url(" + BackgroundImg + ")",
        height:'100vh',
        marginTop:'-70px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div>
        <div style={backgoundImgStyle}>
        </div>
      </div>
    );
  }
  
  export default Games;
  
