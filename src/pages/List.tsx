import React from "react";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

type Props = {};

function List({}: Props) {
  return (
    <div>
      <Navbar />
      <Header showSearcher={false} />
    </div>
  );
}

export default List;
