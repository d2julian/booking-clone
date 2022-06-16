import React from "react";

const buttonStyles = "px-2.5 py-1 ml-5 border-none bg-white text-booking-blue font-semibold";

function Navbar() {
  return (
    <div className="flex justify-center h-12 bg-booking-blue">
      <div className="bg-red flex justify-between items-center w-full max-w-5xl text-white">
        <h1 className="font-medium text-3xl">Booking.com</h1>
        <div>
          <button className={buttonStyles}>Register</button>
          <button className={buttonStyles}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
