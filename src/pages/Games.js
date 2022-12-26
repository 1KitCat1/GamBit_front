import React, { useState, useEffect } from 'react';
import BackgroundImg from "../imgs/airplane-big-dark.jpg"
import Cookies from "js-cookie";
import axios from "axios";
import FlyJetStart from '../components/Games/FlyJet/FlyJetStart';
import FlyJetProcess from '../components/Games/FlyJet/FlyJetProccess';

function Games() {
  const [name, setName] = useState("");
  const [wallets, setWallets] = useState(null);
  useEffect(() => {
    let userData = Cookies.get("_auth_state");
    if (userData != null) {
      setName(JSON.parse(userData).data.username);
      console.log(name);
      console.log(userData);
      if(userData.data != null) {
        const userName = userData.data.username;
        const response = axios.get(
          "http://localhost:8080/api/user/wallets/getByUsername?name=" + userData.data.username    
          );
        if(response != null){
          setWallets(response.data)
        }
      } 
      
      console.log(wallets);
    }
    
  }, []);

  const getWallets = async() => {
    let userData = Cookies.get("_auth_state");
    if (userData != null) {
      const username = JSON.parse(userData).data.username;
      const response = axios.get(
        "http://localhost:8080/api/user/wallets/getByUsername?name=" + username   
        );
      return response.data;
    }
  }

  // getWallets();
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
        {/* <FlyJetStart /> */}
        <FlyJetProcess />
      </div>
    </div>
  );
}
  
  export default Games;
  
