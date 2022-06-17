import React from "react";

type Props = {};

function EmailReg({}: Props) {
  return (
    <div className=" flex justify-center items-center flex-col bg-booking-dark h-64 mt-5 text-gray-400 w-full gap-2">
      <h1 className="text-white">¡Ahorra tiempo y dinero!</h1>
      <span>Regístrate y te enviaremos las mejores ofertas para ti</span>
      <div className="flex gap-2">
        <input className="h-12 w-80 rounded p-2 text-xl font-light" type="text" placeholder="E-mail" required />
        <button className="bg-booking-button rounded h-12 w-40 text-white text-xl font-light">¡Suscríbete!</button>
      </div>
    </div>
  );
}

export default EmailReg;
