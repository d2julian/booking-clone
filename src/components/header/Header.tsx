import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlane, faCar, faTaxi, faPersonSnowboarding, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useReducer } from "react";
import clsx from "clsx";
import { DateRange, Range } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import Options from "../option/Options";

type Props = {
  showSearcher: boolean;
};

const headerListItem = "flex items-center gap-2.5 cursor-pointer p-2.5";

const headerSearchItem = "flex items-center gap-2.5";

const headerIcon = "text-gray-300";

function Header({ showSearcher }: Props) {
  const [dates, setDates] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showCalendar, setshowCalendar] = useState<boolean>(false);

  const [showOptions, setOptions] = useState<boolean>(false);

  type stateProps = any;

  type actionProps = {
    type: string;
    item: string;
  };

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
  return (
    <div className="flex justify-center bg-booking-blue text-white relative">
      <div className={clsx("w-full max-w-5xl mt-5", showSearcher ? "mb-28" : "mb-0")}>
        <div className="flex gap-10 mb-10">
          <div className={`${headerListItem} ${"border border-solid border-white rounded-xl"}`}>
            <FontAwesomeIcon icon={faBed} />
            <span>Alojamiento</span>
          </div>
          <div className={headerListItem}>
            <FontAwesomeIcon icon={faPlane} />
            <span>Vuelos</span>
          </div>
          <div className={headerListItem}>
            <FontAwesomeIcon icon={faCar} />
            <span>Alquiler de coches</span>
          </div>
          <div className={headerListItem}>
            <FontAwesomeIcon icon={faPersonSnowboarding} />
            <span>Atracciones</span>
          </div>
          <div className={headerListItem}>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxis</span>
          </div>
        </div>
        {showSearcher && (
          <>
            <h1>¿Descuentos para siempre? ¡Con Genius!</h1>
            <p className="my-5 mx-0">Viaja y gana: consigue un descuento inmediato del 10% o más con tu cuenta gratis de Booking.com</p>
            <button className="bg-booking-button font-medium p-2.5 hover:bg-booking-button-hover">Inicia sesión / Hazte una cuenta</button>
            <div className="h-14 bg-white border-4 border-solid border-booking-border rounded flex items-center justify-around min-w-min py-2.5 px-0 absolute -bottom-6 w-full max-w-screen-lg">
              <div className={headerSearchItem}>
                <FontAwesomeIcon icon={faBed} className={headerIcon} />
                <input type="text" placeholder="¿Adónde vas?" className={"text-black border-none outline-none"} />
              </div>
              <div className={headerListItem}>
                <FontAwesomeIcon icon={faCalendarDays} className={headerIcon} />
                <span className={"text-gray-300 pointer"} onClick={() => setshowCalendar((prevState) => !prevState)}>
                  {`${format(dates[0].startDate, "dd/MM/yyyy")} - ${format(dates[0].endDate, "dd/MM/yyyy")}`}
                </span>
                {showCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="absolute top-14 z-20"
                  />
                )}
              </div>
              <div className={headerSearchItem}>
                <FontAwesomeIcon icon={faPerson} className={headerIcon} />
                <span
                  onClick={() => setOptions((prevState) => !prevState)}
                  className={"text-gray-300 pointer"}
                >{`${options.adult} adultos · ${options.children} niños · ${options.room} habitación`}</span>
                {showOptions && (
                  <div className="absolute top-14 bg-white text-gray-500 rounded shadow-lg p-5 z-20">
                    <Options label="Adultos" counter={options.adult} action={optionsHandler} item="adult" disabled={options.adult < 2} />
                    <Options label="Niños" counter={options.children} action={optionsHandler} item="children" disabled={options.children === 0} />
                    <Options label="Habitaciones" counter={options.room} action={optionsHandler} item="room" disabled={options.room === 1} />
                  </div>
                )}
              </div>
              <div className={headerSearchItem}>
                <button className="bg-booking-button p-2.5 font-medium hover:bg-booking-button-hover">Buscar</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
