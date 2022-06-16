import React from "react";
import { destinationsInfoArray } from "../../types/types";
import Property from "./Property";
type Props = {};

function PropertyList({}: Props) {
  const propertyInfo: destinationsInfoArray = [
    {
      id: 0,
      imgSrc:
        "https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
      city: "Hoteles",
      hotels: 867931,
    },
    {
      id: 1,
      imgSrc:
        "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
      city: "Apartamentos",
      hotels: 862213,
    },
    {
      id: 2,
      imgSrc: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
      city: " Resorts",
      hotels: 17929,
    },
    {
      id: 3,
      imgSrc: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
      city: "Villas",
      hotels: 453558,
    },
    {
      id: 4,
      imgSrc: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
      city: "Chalets de montaña",
      hotels: 34827,
    },
    {
      id: 5,
      imgSrc: "https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg",
      city: "Cabañas y casas de campo",
      hotels: 149559,
    },
  ];
  return (
    <div className="w-full max-w-screen-lg flex justify-center gap-5 z-10">
      {propertyInfo.map((d) => (
        <Property props={d} key={d.id} />
      ))}
    </div>
  );
}

export default PropertyList;
