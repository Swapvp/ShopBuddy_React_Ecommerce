import React from "react";
import "../Breadcrumbs/Breadcrumbs.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";

function Breadcrumbs({ category, name }) {
  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} />
      SHOP <img src={arrow_icon} alt="" />
      {category} <img src={arrow_icon} alt="" />
      {name}
    </div>
  );
}

export default Breadcrumbs;
