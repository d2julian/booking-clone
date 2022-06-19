import React from "react";
import Header from "../components/header/Header";
import HotelList from "../components/hotelList/HotelList";
import Navbar from "../components/navbar/Navbar";

type Props = {};

function List({}: Props) {
  return (
    <div>
      <HotelList />
    </div>
  );
}

export default List;
