import React from "react";
import orange from "../../assets/banner/orange.png";
import pink from "../../assets/banner/pink.png";
import green from "../../assets/banner/green.png";


const Banner = () => {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 ">
        <div className=" bg-green-200 rounded-l-md ">
          <img src={green} alt="Burger" />
        </div>
        <div className=" bg-orange-200">
          <img src={orange} alt="Burger" />
        </div>
        <div className=" bg-red-200 rounded-r-md ">
          <img src={pink} alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
