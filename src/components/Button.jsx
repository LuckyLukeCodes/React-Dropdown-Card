import React from "react";
import { useAppContext } from "../App";

const Button = ({ text }) => {
  const { setHeight, setIsOpen } = useAppContext();

  const handleMouseOver = () => {
    setHeight("w-[51%] h-[200px]");
    setIsOpen(true);
  };

  const handleMouseOut = () => {
    setHeight("w-0 h-0");
    setIsOpen(false);
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="rounded-xl bg-[var(--btn-color)] px-12 py-4 text-lg font-semibold capitalize text-slate-500/80 hover:bg-indigo-950/10 hover:text-indigo-900"
    >
      {text}
    </button>
  );
};

export default Button;
