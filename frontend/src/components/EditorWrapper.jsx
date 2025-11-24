import React, { useState } from 'react';
import {
  $getRoot,
  $getSelection
} from 'lexical';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { EquationNode } from './Toolbar/Equation/EquationNode.js';
import EquationsPlugin from './Toolbar/Equation/EquationPlugin.js';
import Toolbar from './Toolbar/toolbar.jsx';
import {ListNode, ListItemNode} from '@lexical/list';
import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import {TablePlugin} from '@lexical/react/LexicalTablePlugin';
import {TableNode, TableCellNode, TableRowNode } from '@lexical/table'
import {FaArrowCircleDown, FaArrowCircleUp} from 'react-icons/fa'

function onError(error) {
  console.error(error);
}

function Editor({ width, placeholder }) {
  const initialConfig = {
    namespace: 'MyEditor',
    onError,
    nodes: [EquationNode,
      ListNode,
      ListItemNode,
      TableNode,
      TableCellNode,
      TableRowNode
    ],
  };

  const [showToolbar, setShowToolbar] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-full">
          {/* Botón dentro del cuadro de texto, parte superior */}
          <button
            onClick={() => setShowToolbar((prev) => !prev)}
            className="bg-white absolute top-1 right-2 bg-gray-200 hover:scale-110  text-black px-2 py-1 rounded text-xs z-10 no-print cursor-pointer"
          >
            {showToolbar ? <FaArrowCircleUp size={20} /> : <FaArrowCircleDown size={20} />}
          </button>

          {/* Cuadro de texto */}
          <RichTextPlugin
            contentEditable={
              <ContentEditable
              className={`border resize-none rounded-md p-2 pt-2 pr-10 ${width} text-[12px] h-[150px] overflow-y-auto transition-all duration-200 content-editable ${
                isFocused ? 'outline outline-black' : 'focus:outline-none'
              }`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{ minHeight: '18svh' }}
            />
            

            }
            placeholder={
              <div className="absolute left-2 top-2 pointer-events-none text-gray-400 text-[12px]">
                {placeholder}
              </div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />

          <EquationsPlugin />
        </div>

        {/* Toolbar debajo del cuadro si está visible */}
        {showToolbar && <Toolbar className="no-print"/>}
      </div>
      <HistoryPlugin />
            <ListPlugin />
            <TablePlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
}

export default Editor;
