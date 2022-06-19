import { faMagnifyingGlass, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { DateRange, Range } from "react-date-range";
import { format } from "date-fns";

type Props = {};
const HotelList = (props: Props) => {
  const [showCalendar, setshowCalendar] = useState<boolean>(false);
  const [dates, setDates] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div>
      <Header showSearcher={false} />
      <Navbar />
      <div className="flex justify-center">
        <div className="flex w-full max-w-5xl gap-5 ">
          <div className="flex flex-col justify-center bg-booking-orange grow shrink basis-0 rounded p-4 gap-2">
            <div className="text-xl">Buscar</div>
            <div className="flex flex-col">
              <div className="text-xs">Destino/Nombre del alojamiento:</div>
              <div className="bg-white flex items-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black mx-1 text-2xl text-gray-400" />
                <input type="text" placeholder="¿Adónde vas?" className={"text-black border-none outline-none w-full text-sm p-2.5"} />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs">Fecha de entrada:</div>
              <div className="bg-white flex items-center">
                <FontAwesomeIcon icon={faCalendarDays} className="text-black mx-1 text-2xl text-gray-400" />
                <div className={"text-gray-300 pointer p-2.5"} onClick={() => setshowCalendar((prevState) => !prevState)}>
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} - ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                </div>
                {showCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs">Fecha de salida:</div>
              <div className="bg-white flex items-center">
                <FontAwesomeIcon icon={faCalendarDays} className="text-black mx-1 text-2xl text-gray-400" />
                <div className={"text-gray-300 pointer p-2.5"} onClick={() => setshowCalendar((prevState) => !prevState)}>
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} - ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                </div>
                {showCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs">Estancia</div>
              <div className="bg-white flex items-center">
                <FontAwesomeIcon icon={faPerson} className="text-black mx-1 text-2xl text-gray-400" />
                <input type="text" placeholder="¿Adónde vas?" className={"text-black border-none outline-none w-full text-sm p-2.5"} />
              </div>
            </div>
            <button className="bg-booking-button text-white p-4 font-medium hover:bg-booking-button-hover">Buscar</button>
          </div>
          <div className="grow-3 shrink basis-0">listResult</div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
