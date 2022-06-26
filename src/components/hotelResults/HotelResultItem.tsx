import React, { useContext } from "react";
import InfoContext from "../../store/infoBooking";
import { hotelResultProp } from "../../types/types";
import { formatDistanceStrict } from "date-fns";
import { es } from "date-fns/locale";

const HotelResultItem = ({ props }: hotelResultProp) => {
  const ctx = useContext(InfoContext);
  const days = formatDistanceStrict(ctx.dates[0].startDate, ctx.dates[0].endDate, { locale: es, unit: "day" });
  return (
    <div className=" flex border-1sm border-gray-300 justify-between gap-2 p-2.5">
      <img src={props.imgSrc} alt={props.name}></img>
      <div className="flex gap-2 flex-col gap-2 flex-1">
        <div className="flex gap-2">
          <span className="text-xl font-bold text-booking-button">{props.name}</span>
          {[...Array(props.stars)].map((x, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 fill-booking-rating-color">
              <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path>
            </svg>
          ))}
        </div>
        <div className="text-sm">{props.breakFast}</div>
        <div className="text-sm">{props.info}</div>
      </div>
      <div className="flex flex-col gap-2 items-end justify-between">
        <div className="flex gap-4">
          <span className="font-bold">{props.rating}</span>
          <span className="bg-booking-blue text-white rounded p-1">{props.score}</span>
        </div>
        <div className="text-sm text-gray-600">{days}</div>
        <div className="text-lg font-bold text-gray-600">€{props.price}</div>
        <button className="bg-booking-button text-white p-2 font-medium hover:bg-booking-button-hover">Ver Disponibilidad &gt; </button>
      </div>
    </div>
  );
};

export default HotelResultItem;
