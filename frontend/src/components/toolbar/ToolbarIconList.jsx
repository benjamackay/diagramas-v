import { FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaTable } from 'react-icons/fa'; // íconos de react-icons, por ejemplo
import { TbMathFunction } from "react-icons/tb";

export const eventTypes = {
  paragraph: "paragraph",
  h1: "h1",
  h2: "h2",
  ul: "unorderedList",
  ol: "orderedList",
  quote: "quote",
  formatBold: "formatBold",
  formatItalic: "formatItalic",
  formatUnderline: "formatUnderline",
  formatEquation: "formatEquation", // Puedes usar esto para tu nodo de ecuación
  formatTable: "formatTable",
};


export const pluginList = [
  {
    id: 1,
    Icon: FaBold,
    event: eventTypes.formatBold,
  },
  {
    id: 2,
    Icon: FaItalic,
    event: eventTypes.formatItalic,
  },
  {
    id: 4,
    Icon: FaListUl,
    event: eventTypes.ul,
  },
  {
    id: 5,
    Icon: FaListOl,
    event: eventTypes.ol,
  },
  {
    id:6,
    Icon: TbMathFunction,
    event: eventTypes.formatEquation,
  },
  {
    id: 7,
    Icon: FaTable,
    event: eventTypes.formatTable,
  },
];
