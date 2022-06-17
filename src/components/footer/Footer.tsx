import React from "react";

type Props = {
  category: string;
};

const Footer = ({ category }: Props) => {
  return <li className="text-booking-blue text-xxs cursor-pointer m-0.5">{category}</li>;
};

export default Footer;
