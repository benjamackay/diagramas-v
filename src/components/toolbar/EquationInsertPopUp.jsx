import React, { useState, useRef } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { INSERT_EQUATION_COMMAND } from './Equation/EquationPlugin';

function EquationInsertPopup({ onClose }) {
  const [inputValue, setInputValue] = useState('');
  const [editor] = useLexicalComposerContext();

  const handleInsert = () => {
    if (inputValue.trim() !== '') {
      editor.dispatchCommand(INSERT_EQUATION_COMMAND, { equation: inputValue, inline: true });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-96"
      onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl mb-2">Insertar ecuación</h2>
        <textarea
          className="w-full border rounded p-2"
          rows={4}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe la ecuación en LaTeX"
          autoFocus
        />
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
          <button onClick={handleInsert} className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Insertar</button>
        </div>
      </div>
    </div>
  );
}
export default EquationInsertPopup;