import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

type Props = {
  equation: string;
  inline?: boolean;
  onDoubleClick?: () => void;
};

const KatexRenderer = ({ equation, inline = true, onDoubleClick }: Props) => {
  const html = katex.renderToString(equation, {
    throwOnError: false,
    displayMode: !inline,
  });

  return (
    <div
      className="katex-renderer"
      onDoubleClick={onDoubleClick}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default KatexRenderer;
