import React from "react";
import Cookies from "js-cookie";
import axios from "axios";

const WalletsList = () => {
  const getWallets = () => {
    let userData = Cookies.get("_auth_state");
    if (userData != null) {
      const username = JSON.parse(userData).data.username;
      const response = axios.get(
      "http://localhost:8080/api/user/wallets/getByUsername?name=" + username    
      );
      return response.data;
    }
  }
  const wallets = getWallets();
  console.log(wallets);
  return (
    wallets.map((wallet) => {
      return <option value="green" label="green" />;
    })
  );
};

export default WalletsList;
