import React from "react";
import classes from "./DestinationList.module.css";
import { destinationsInfoArray } from "../../types/types";
import Destination from "./Destination";
import { motion } from "framer-motion";

type Props = {};

const DestinationList = (props: Props) => {
  const destinationsInfo: destinationsInfoArray = [
    {
      id: 0,
      imgSrc: "https://cf.bstatic.com/xdata/images/city/1024x768/971352.webp?k=e60b6789bf1ef865daa29402a8b8c69dd495df90fd4859e0b9f8525592476116&o=",
      city: "Madrid",
      hotels: 5759,
    },
    {
      id: 1,
      imgSrc: "https://t-cf.bstatic.com/xdata/images/city/1024x768/968314.webp?k=0e0d712f666150594683eeeea60d7e3afdaab51286a9023f15f648ff3fbb0d6c&o=",
      city: "Barcelona",
      hotels: 3307,
    },
    {
      id: 2,
      imgSrc: "https://t-cf.bstatic.com/xdata/images/city/1024x768/645685.webp?k=bb3c96578e18a637d5481bd37ce507968c8473365b557d08c302e105ec5f13dc&o=",
      city: " Mallorca",
      hotels: 356,
    },
    {
      id: 3,
      imgSrc: "https://t-cf.bstatic.com/xdata/images/city/1024x768/645961.webp?k=590a1d750ec44a3b9c5f6d9dd1c84f2d8b87693e1c553f2dc76ac2cebe75f1a2&o=",
      city: "Sevilla",
      hotels: 3360,
    },
    {
      id: 4,
      imgSrc: "https://t-cf.bstatic.com/xdata/images/city/1024x768/968314.webp?k=0e0d712f666150594683eeeea60d7e3afdaab51286a9023f15f648ff3fbb0d6c&o=",
      city: "Granada",
      hotels: 1454,
    },
  ];

  return (
    <div className="w-full max-w-screen-lg flex justify-center flex-wrap gap-5 mb-5">
      {destinationsInfo.map((d) => (
        <Destination props={d} key={d.id} />
      ))}
    </div>
  );
};

export default DestinationList;
