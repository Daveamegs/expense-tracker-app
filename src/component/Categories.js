import React from "react";
import { FaHome } from "react-icons/fa";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories--img-desc">
        <FaHome size={35} color="#c11" />
        <span className="categories--description">
          <h3>Home Loan</h3>
          <p>15 April</p>
        </span>
      </div>

      <p>$150.00</p>
    </div>
  );
};

export default Categories;
