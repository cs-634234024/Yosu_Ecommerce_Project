import React from "react";
import { listMenu } from "../../utils/constant";

const MainMenu = () => {
  return (
    <div className="border p-5 border-gray-300  w-[100%] rounded-md">
      <div className="flex flex-col">
        <div className="flex justify-between mb-2">
          <h1 className="text-2xl font-bold"> Main Menu </h1>
        </div>
        <hr className="mb-2" />
        {listMenu.map((val, idx) => (
          <div key={idx} className="hover:bg-gray-300 cursor-pointer flex justify-between py-3 my-1 rounded-md border border-gray-300 items-center ">
                <div className="flex items-center px-4 ">
                    <img className="" src={val.icon} alt="" width={35} />
                    <div className="mx-3 font-semibold">{val.title}</div>
                </div>
                <div className="px-5 font-semibold "> + </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
