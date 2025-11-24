import React, { useState } from "react";
import Usuario from "./Pages/Usuario.jsx";

function App() {
  // Estado que controla la herramienta activa
  const [herramientaActiva, setHerramientaActiva] = useState(null);

  return (
    <div className="w-full h-screen ">
      <Usuario />
    </div>
  );
}

export default App;
