import React from "react";
import HotelResultItem from "./HotelResultItem";
import { hotelResultItemArray } from "../../types/types";

type Props = {};

function HotelResultList({}: Props) {
  const list: hotelResultItemArray = [
    {
      id: 0,
      name: "Hotel Cala Murada",
      rating: "Fabuloso",
      score: 8.1,
      stars: 3,
      imgSrc:
        "https://t-cf.bstatic.com/xdata/images/hotel/square200/149672304.webp?k=0db454e328b4d9129078d6e9d138bfd6a835dc818245fcb2c834759919851a44&o=&s=1",
      price: 268,
      info: "Apartamento entero • 1 dormitorio • 1 sala de estar • 1 baño • 40m²",
      breakFast: "Desayuno incluido",
    },
    {
      id: 1,
      name: "Apartamentos Bellamar",
      rating: "Fantastico",
      score: 7.9,
      stars: 3,
      imgSrc:
        "https://t-cf.bstatic.com/xdata/images/hotel/square200/9871496.webp?k=681a9609f6a4c60d43dee40913ccfcfd9dd2a41f482aab912fc28b3be2a26387&o=&s=1",
      price: 268,
      info: "Camas: 1 doble o 2 individuales",
      breakFast: "",
    },
    {
      id: 2,
      name: "Hotel Brismar",
      rating: "Fantastico",
      score: 8,
      stars: 3,
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/square200/21762943.webp?k=a93a97b155a1aeb00d4906fc083e34931291f3d7ff71133b64300eca84bceee8&o=&s=1",
      price: 474,
      info: "Habitación Doble con balcón - 1 o 2 camas",
      breakFast: "Desayuno incluido",
    },
    {
      id: 3,
      name: "Hotel Honucai",
      rating: "Fabuloso",
      score: 8.9,
      stars: 4,
      imgSrc:
        "https://cf.bstatic.com/xdata/images/hotel/square200/255573852.webp?k=e6b0baa9aad827013473da5765bafeebe1a745350d050373affc476827c1261d&o=&s=1",
      price: 476,
      info: "Camas: 1 doble o 2 individuales",
      breakFast: "",
    },
    {
      id: 4,
      name: "Apartamentos Bellamar",
      rating: "Fantastico",
      score: 7.9,
      stars: 3,
      imgSrc:
        "https://t-cf.bstatic.com/xdata/images/hotel/square200/9871496.webp?k=681a9609f6a4c60d43dee40913ccfcfd9dd2a41f482aab912fc28b3be2a26387&o=&s=1",
      price: 268,
      info: "Camas: 1 doble o 2 individuales",
      breakFast: "",
    },
  ];
  return (
    <div className="flex flex-col grow-1 gap-1">
      {list.map((d) => (
        <HotelResultItem props={d} key={d.id} />
      ))}
    </div>
  );
}

export default HotelResultList;
