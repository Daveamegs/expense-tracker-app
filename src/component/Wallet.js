import React from "react";
import { FaWallet } from "react-icons/fa";
import Dropdown from "./Dropdown";


const Wallet = () => {
  return (
    <div className="wallet">
      <div className="wallet--default">
        <FaWallet size={40} color="#0a4" />
        <span className="wallet--change-default">
          <h2>Home Wallet</h2>
          <p>Change Default Wallet</p>
        </span>
      </div>
      <div className="options-dropdown">
        <select>
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </select>
      </div>
    </div>
  );
};

export default Wallet;
