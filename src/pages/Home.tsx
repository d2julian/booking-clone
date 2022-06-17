import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import DestinationList from "../components/destination/DestinationList";
import PropertyList from "../components/property/PropertyList";
import DiscoverList from "../components/discover/DiscoverList";
import EmailReg from "../components/emailreg/EmailReg";
import FooterList from "../components/footer/FooterList";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Header showSearcher={true} />
      <div className="flex flex-col gap-7 items-center mt-10">
        <h1 className="w-booking-1024 text-xl font-bold">Busca por tipo de alojamiento</h1>
        <PropertyList />
        <DestinationList />
        <h1 className="w-booking-1024 text-xl font-bold pointer">Descubre España</h1>
        <DiscoverList />
        <EmailReg />
      </div>
      <div className="flex flex-col items-center">
        <FooterList />
      </div>
    </div>
  );
};

export default Home;
