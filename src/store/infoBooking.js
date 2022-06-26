import React, { useState } from "react";

const InfoContext = React.createContext({
  destination: "",
  dates: [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ],
  setDates: ({}) => ({}),
});

export const InfoContextProvider = (props) => {
  const [destination, setDestination] = useState();
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <InfoContext.Provider
      value={{
        destination,
        dates,
        setDestination,
        setDates,
      }}
    >
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
