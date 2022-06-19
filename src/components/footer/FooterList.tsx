import React from "react";
import Footer from "./Footer";

type Props = {};

const FooterList = (props: Props) => {
  const footerPlaces: string[] = ["Países", "Regiones", "Ciudades", "Zonas", "Aeropuertos", "Hoteles", "Lugares de interés"];
  const footerProperties: string[] = ["Casas", "Apartamentos", "Resorts", "Villas", "Albergues", "Bed and breakfasts", "Hostales y pensiones"];
  const footerOptions: string[] = [
    "Alojamientos únicos",
    "Todos los destinos",
    "Descubrir",
    "Opiniones",
    "Artículos",
    "Comunidades viajeras",
    "Ofertas de temporada y para las vacaciones",
  ];
  const footerServices: string[] = ["Alquiler de coches", "Buscador de vuelos", "Reservas en restaurantes", "Booking.com para Agentes de viajes"];
  return (
    <div className="flex w-full max-w-5xl p-2 justify-around">
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
      <div>
        <ul>
          {footerOptions.map((item) => (
            <Footer category={item} key={item} />
          ))}
        </ul>
      </div>
      <div>
        <ul>
          {footerServices.map((item) => (
            <Footer category={item} key={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
