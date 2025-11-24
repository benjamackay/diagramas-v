import { HiOutlineInformationCircle } from "react-icons/hi";
import InformacionButton from "./BotonInformacion";

const CuadroTexto = ({ handleKeyDown, value, campo, placeholder, width, onChange, textoplace }) => {

  return (
    <div className={`relative ${width} h-[150px]`}>
      <textarea
        id={campo}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e, campo)}
        onKeyDown={handleKeyDown}
        className="border resize-none w-full h-full p-2 text-[12px] rounded-md pr-10 no-print1"
      />
      <div className="absolute bottom-2 right-2 text-[10px] text-gray-500 items-center flex justify-center space-x-2">
        {value.length}/300
        <InformacionButton texto={textoplace} />
      </div>
    </div>
  );
};

export default CuadroTexto;