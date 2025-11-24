import React, { useState } from "react";
import BotonInformacion from "../Components/BotonInformacion";

const TextareaConArchivos = ({ placeholder, value, onChange, campo, width }) => {
  const [texto, setTexto] = useState(value || "");
  const [archivos, setArchivos] = useState([]); // [{ file, url }]

  const handleFiles = (fileList) => {
    const nuevosArchivos = Array.from(fileList)
      .filter(file => file.type.startsWith("image/")) // solo imágenes
      .map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));

    setArchivos((prev) => [...prev, ...nuevosArchivos]);
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const handleDragOver = (event) => event.preventDefault();

  const eliminarArchivo = (index) => {
    setArchivos((prev) => {
      const copia = [...prev];
      URL.revokeObjectURL(copia[index].url); // Limpia memoria
      copia.splice(index, 1);
      return copia;
    });
  };

  return (
    <div
      className={` flex flex-col max-w-3xl rounded relative transition-all h-[150px] bg-white text-[14px] ${width}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Contenedor para textarea e info */}
      <div className="relative flex-grow ">
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder={placeholder}
          className="w-full h-full px-4 pt-2 pb-16 outline-none resize-none border rounded-md h-[150px] content-editable"
        />

        {/* Imágenes abajo a la izquierda */}
        {archivos.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-2 items-center max-w-full overflow-x-auto no-print">
            {archivos.map(({ file, url }, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 rounded px-2 py-1"
              >
                <img
                  src={url}
                  alt={file.name}
                  className="w-8 h-8 object-cover rounded mr-2"
                  title={file.name}
                />
                <button
                  onClick={() => eliminarArchivo(index)}
                  className="ml-1 text-red-500 hover:text-red-700 font-bold text-xs no-print"
                  title="Eliminar imagen"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Botón de información */}
        <div className="absolute bottom-2 right-2 flex items-center space-x-2">
          <div className="text-[10px] text-gray-500">
            {texto.length}/300
          </div>
          <BotonInformacion texto="Aquí va la explicación o ayuda relacionada al textarea." />
        </div>
        <div className="absolute bottom-2 right-2 text-[10px] text-gray-500">
        </div>
      </div>
    </div>
  );
};

export default TextareaConArchivos;
