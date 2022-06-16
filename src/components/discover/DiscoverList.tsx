import React from "react";
import { destinationsInfoArray } from "../../types/types";
import Discover from "./Discover";

type Props = {};

const DiscoverList = (props: Props) => {
  const discoverInfo: destinationsInfoArray = [
    {
      id: 0,
      imgSrc: "https://cf.bstatic.com/xdata/images/city/square250/971969.webp?k=b28b396868fde18048597a314f1c14d985741070797df00ec429906acbcccbfb&o=",
      city: "Benidorm",
      hotels: 1782,
    },
    {
      id: 1,
      imgSrc: "https://cf.bstatic.com/xdata/images/region/square250/49681.webp?k=5598b4494e2dff5beb188e7f316bf3dbf909b675d75fcb9ed64ba57b46a775ac&o=",
      city: "Menorca",
      hotels: 1694,
    },
    {
      id: 2,
      imgSrc: "https://cf.bstatic.com/xdata/images/city/square250/968315.webp?k=14d0bad185930ec2663562b999ecf498fb6fcf492c16a4c33228504a15e2d119&o=",
      city: "Mallorca",
      hotels: 10768,
    },
    {
      id: 3,
      imgSrc: "https://cf.bstatic.com/xdata/images/city/square250/645577.webp?k=81d61cb4e120af4d4218386546a117b77ef18dfcf3727d186ec3a1aad60f38fe&o=",
      city: "Malaga",
      hotels: 3904,
    },
    {
      id: 4,
      imgSrc: "https://cf.bstatic.com/xdata/images/city/square250/646053.webp?k=e3ce89e2a1378141324ec06b415751bd63f06cb085a0eda3c915e16cc073bf8b&o=",
      city: "Valencia",
      hotels: 2152,
    },
    {
      id: 5,
      imgSrc: "https://cf.bstatic.com/xdata/images/city/square250/968315.webp?k=14d0bad185930ec2663562b999ecf498fb6fcf492c16a4c33228504a15e2d119&o=",
      city: "Barcelona",
      hotels: 3302,
    },
  ];
  return (
    <div className="w-full max-w-screen-lg flex justify-center gap-5 z-10">
      {discoverInfo.map((d) => (
        <Discover props={d} key={d.id} />
      ))}
    </div>
  );
};

export default DiscoverList;
