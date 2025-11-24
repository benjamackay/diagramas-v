import React, { forwardRef } from 'react';

type Props = {
  equation: string;
  setEquation: (value: string) => void;
  inline: boolean;
};

// Forward ref es necesario para Lexical (para input focus)
const EquationEditor = forwardRef<HTMLTextAreaElement, Props>(
  ({ equation, setEquation, inline }, ref) => {
    return (
      <textarea
        ref={ref}
        className="w-full p-2 border rounded"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        placeholder="Escribe una ecuación en LaTeX..."
      />
    );
  }
);

export default EquationEditor;
