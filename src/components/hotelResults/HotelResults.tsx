import React, { useState, useReducer } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Options from "../option/Options";
import HotelResultList from "../hotelResults/HotelResultList";
import { useLocation } from "react-router-dom";
import { DateRange, Range } from "react-date-range";
import { format } from "date-fns";
import { faMagnifyingGlass, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

type stateProps = any;

type actionProps = {
  type: string;
  item: string;
};

const HotelResults = (props: Props) => {
  const location = useLocation();
  console.log(location);

  const [showCalendarGo, setshowCalendarGo] = useState<boolean>(false);
  const [showCalendarBack, setshowCalendarBack] = useState<boolean>(false);

  const [showOptions, setOptions] = useState<boolean>(false);

  const optionsInitalState = {
    adult: 1,
    children: 0,
    room: 1,
  };

  const optionsReducer = (state: stateProps, action: actionProps) => {
    if (action.type === "ADD") {
      return { ...state, [action.item]: state[action.item] + 1 };
    } else if (action.type === "REMOVE") {
      return { ...state, [action.item]: state[action.item] - 1 };
    }
  };

  const [options, dispatch] = useReducer(optionsReducer, optionsInitalState);

  const optionsHandler = (type: string, item: string) => {
    dispatch({ type: type, item: item });
  };

  const [dateGo, setDateGo] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dateBack, setDateBack] = useState<Range[]>([
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
          <div className="flex flex-col justify-center bg-booking-orange grow-1 basis-40 p-4 gap-2 h-max sticky top-2.5 ">
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
              <div className="bg-white flex items-center relative">
                <FontAwesomeIcon icon={faCalendarDays} className="text-black mx-1 text-2xl text-gray-400" />
                <div className={"text-gray-300 pointer p-2.5"} onClick={() => setshowCalendarGo((prevState) => !prevState)}>
                  {`${format(dateGo[0].startDate, "dd/MM/yyyy")}`}
                </div>
                {showCalendarGo && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => {
                      setDateGo([item.selection]);
                      setshowCalendarGo((prevState) => !prevState);
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={dateGo}
                    className="absolute top-10 z-20"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs">Fecha de salida:</div>
              <div className="bg-white flex items-center relative">
                <FontAwesomeIcon icon={faCalendarDays} className="text-black mx-1 text-2xl text-gray-400" />
                <div className={"text-gray-300 pointer p-2.5"} onClick={() => setshowCalendarBack((prevState) => !prevState)}>
                  {`${format(dateBack[0].startDate, "dd/MM/yyyy")}`}
                </div>
                {showCalendarBack && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => {
                      setDateBack([item.selection]);
                      setshowCalendarBack((prevState) => !prevState);
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={dateBack}
                    className="absolute top-10 z-20"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-xs">Estancia</div>
              <div className="bg-white flex items-center relative">
                <FontAwesomeIcon icon={faPerson} className="text-black mx-1 text-2xl text-gray-400" />
                <div
                  onClick={() => setOptions((prevState) => !prevState)}
                  className={"text-gray-300 pointer truncate p-2.5 w-full"}
                >{`${options.adult} adultos · ${options.children} niños · ${options.room} habitación`}</div>
                {showOptions && (
                  <div className="absolute top-14 bg-white text-gray-500 rounded shadow-lg p-5 z-20">
                    <Options label="Adultos" counter={options.adult} action={optionsHandler} item="adult" disabled={options.adult < 2} />
                    <Options label="Niños" counter={options.children} action={optionsHandler} item="children" disabled={options.children === 0} />
                    <Options label="Habitaciones" counter={options.room} action={optionsHandler} item="room" disabled={options.room === 1} />
                  </div>
                )}
              </div>
            </div>
            <button className="bg-booking-button text-white p-4 font-medium hover:bg-booking-button-hover">Buscar</button>
          </div>
          <div className="flex grow-3">
            <HotelResultList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelResults;
