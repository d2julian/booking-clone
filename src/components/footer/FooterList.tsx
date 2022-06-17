import React from "react";
import Footer from "./Footer";

type Props = {};

const FooterList = (props: Props) => {
  const footerPlaces: string[] = ["Países", "Regiones", "Ciudades", "Zonas", "Aeropuertos", "Hoteles", "Lugares de interés"];
  const footerProperties: string[] = ["Casas", "Apartamentos", "Resorts", "Villas", "Albergues", "Bed and breakfasts", "Hostales y pensiones"];
  return (
    <div className="flex w-full max-w-5xl p-2 gap-20 ">
      <div>
        <ul>
          {footerPlaces.map((item) => (
            <Footer category={item} key={item} />
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {footerProperties.map((item) => (
            <Footer category={item} key={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
