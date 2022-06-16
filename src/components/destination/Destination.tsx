import React from "react";
import { destinationsInfoProp } from "../../types/types";
import classes from "./Destination.module.css";
import { motion } from "framer-motion";
const Destination = ({ props }: destinationsInfoProp) => {
  return (
    <motion.button whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.95 }} className="relative h-52 text-black rounded-lg overflow-hidden grow">
      <img className="w-full h-52 object-cover" src={props.imgSrc} alt={props.city}></img>
      <div className="absolute bottom-5 left-5 text-white font-extrabold text-shadow">
        <h1>{props.city}</h1>
        <h2>{props.hotels} alojamientos</h2>
      </div>
    </motion.button>
  );
};

export default Destination;
