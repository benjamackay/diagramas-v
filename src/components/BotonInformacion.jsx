import { useState } from "react";
import infoIcon from '../assets/icons/info.png';

const InformacionButton = ({ texto }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <button
        onClick={togglePopup}
        className="p-1 rounded-full cursor-pointer hover:scale-110 focus:outline-none transition-transform duration-200"
        aria-expanded={showPopup}
        aria-haspopup="true"
      >
        <img src={infoIcon} alt="info icon" className="w-5 h-" />
      </button>

      {showPopup && (
        <div
          onClick={closePopup}
          className="fixed inset-0 flex items-center justify-center z-100 "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-black rounded-lg p-6 max-w-sm w-full relative shadow-2xl"
          >
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold text-lg cursor-pointer focus:outline-none"
              aria-label="Cerrar popup"
            >
              &times;
            </button>
            <div className="text-sm text-gray-800 space-y-2">
                <h3>¿Qué debo responder?</h3>
                <hr />
                <div>
                {texto}
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InformacionButton;
