import { useState } from "react";
import { pluginList } from "./ToolbarIconList";
import  useOnClickListener  from "./useOnClickListener";
import EquationInsertPopup from "./EquationInsertPopUp";


function Toolbar() {
    const {onClick} = useOnClickListener();
    const [showEquationPopup, setShowEquationPopup] = useState(false);

  // Nuevo handler que intercepta el evento de insertar ecuación
  const handleClick = (event) => {
    if (event === 'formatEquation') {  // o el id que uses para la ecuación
      setShowEquationPopup(true);
    } else {
      onClick(event); // para el resto de eventos sigue usando tu hook
    }
  };
  return (
    <>
      <div className="flex gap-2 mb-2 no-print">
        {pluginList.map(({ id, Icon, event }) => (
          <button
            key={id}
            onClick={() => handleClick(event)}
            className="p-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            <Icon />
          </button>
        ))}
      </div>

      {showEquationPopup && (
        <EquationInsertPopup onClose={() => setShowEquationPopup(false)} />
      )}
    </>
  );
}

export default Toolbar;