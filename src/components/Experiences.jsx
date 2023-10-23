import React from "react";
import Morocha from "../assets/images/Morocha.jpg";
import Star from "../assets/images/Star.png";

export default function Experiences() {
  return (
    <div className=" w-44 text-base p-5">
      <img className="w-full rounded-lg " src={Morocha} alt="Morocha" />
      <div className="flex items-center justify-around">
        <img className="h-3" src={Star} alt="" />
        <span> 5.0 </span>
        <span className="font-thin text-gray-500">(6) * </span>
        <span className=" text-gray-700 font-bold">USA</span>
      </div>
      <p> Life is hard with Morocha</p>
      <p>
        <span className="font-semibold">From 136$</span> / person
      </p>
    </div>
  );
}
