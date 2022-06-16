import React from "react";
import { destinationsInfoProp } from "../../types/types";

type Props = {};

const Discover = ({ props }: destinationsInfoProp) => {
  return (
    <div className="text-black overflow-hidden z-20 flex flex-col flex-1 cursor-pointer">
      <img className="w-full h-50 object-cover" src={props.imgSrc} alt={props.city}></img>
      <div className="text-left">
        <div className="font-bold">{props.city}</div>
        <div>{props.hotels} hoteles</div>
      </div>
    </div>
  );
};
export default Discover;
