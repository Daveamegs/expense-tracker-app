import React from "react";
import { FaCalendar } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = () => {
  return (
    <option value="Transactions">
      <p className="">
        <FaCalendar /> Transactions
      </p>
      {/* <RiArrowDropDownLine /> */}
    </option>
  );
};

export default Dropdown;
