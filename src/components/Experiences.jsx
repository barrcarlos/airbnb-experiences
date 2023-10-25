import React from "react";
import Star from "../assets/images/Star.png";


export default function Experiences(props) {
  return (
    <div className="flex flex-wrap w-44 text-base p-5">
      <img className="w-full rounded-lg " src={`${props.img}`} alt={`${props.name}`}
      />
      <div className="flex items-center justify-around">
        <img className="h-3" src={Star} alt="" />
        <span> {props.rating} </span>
        <span className="font-thin text-gray-500">({props.reviewCount}) *  </span>
        <span className=" text-gray-700 font-bold"> {props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="font-semibold">From {props.price}$</span> / person
      </p>
    </div>
  );
}
