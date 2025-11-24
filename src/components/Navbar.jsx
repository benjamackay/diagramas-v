import { useState } from "react";
import { BiMath } from "react-icons/bi";
import { FaItalic } from "react-icons/fa6";
import { FaBold, FaRegArrowAltCircleRight, FaRegUserCircle, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosLink } from "react-icons/io";

const Navbar = ({ onToolChange }) => {
  const [visible, setVisible] = useState(true);
    const activarHerramienta = (tool) => {
    onToolChange(tool); // comunica al padre
  };

  return (
    <>
      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-2xl h-16 flex justify-between items-center px-8 transform transition-transform duration-500 ${
          visible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Botón para cerrar navbar */}
        <div className="cursor-pointer" onClick={() => setVisible(false)}>
          <FaRegArrowAltCircleLeft color="black" size={18} />
        </div>

        {/* Botones */}
        <div className="flex flex-row space-x-4 items-center">
          <div onClick={() => activarHerramienta("bold")} className="h-10 w-10 rounded-md cursor-pointer bg-white flex justify-center items-center shadow-xl">
            <BiMath color="black" size={18} />
          </div>
          <div onClick={() => activarHerramienta("bold")} className="h-10 w-10 rounded-md cursor-pointer bg-white flex justify-center items-center shadow-xl">
            <FaItalic color="black" size={18} />
          </div>
          <div onClick={() => activarHerramienta("bold")} className="h-10 w-10 rounded-md cursor-pointer bg-white flex justify-center items-center shadow-xl">
            <FaBold color="black" size={18} />
          </div>
          <div onClick={() => activarHerramienta("bold")} className="h-10 w-10 rounded-md cursor-pointer bg-white flex justify-center items-center shadow-xl">
            <TfiMenuAlt color="black" size={18} />
          </div>
          <div onClick={() => activarHerramienta("bold")} className="h-10 w-10 rounded-md cursor-pointer bg-white flex justify-center items-center shadow-xl">
            <IoIosLink color="black" size={18} />
          </div>
        </div>

        {/* Icono usuario */}
        <div>
          <FaRegUserCircle color="black" size={24} className="cursor-pointer" />
        </div>
      </div>

      {/* BOTÓN FLOTANTE para reabrir el navbar */}
      {!visible && (
        <button
          onClick={() => setVisible(true)}
          className="fixed top-4 left-4 bg-white p-2 shadow-lg rounded-full z-50"
          title="Mostrar barra"
        >
          <FaRegArrowAltCircleRight color="black" />
        </button>
      )}
    </>
  );
};

export default Navbar;
