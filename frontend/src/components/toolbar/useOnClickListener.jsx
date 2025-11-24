import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { eventTypes } from "./ToolbarIconList";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { INSERT_EQUATION_COMMAND } from "./Equation/EquationPlugin";
import {INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND} from '@lexical/list'
import {$createTableNodeWithDimensions} from '@lexical/table';
import {$insertNodeToNearestRoot} from "@lexical/utils";

const useOnClickListener = () => {
    const [editor] = useLexicalComposerContext();
    const onClick = (event) => {
        if (event === eventTypes.formatBold) {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
            console.log("Bold format applied");
        } else if (event === eventTypes.formatItalic) {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
            console.log("Italic format applied");
        } else if (event === eventTypes.formatUnderline) {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
            console.log("Underline format applied");
        } else if (event === eventTypes.formatEquation) {
            editor.dispatchCommand(INSERT_EQUATION_COMMAND, { equation: '', inline: false });
            console.log("Equation format applied");
        } else if (event === eventTypes.ol){
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
            console.log("Ordered list inserted");
        } else if (event === eventTypes.ul) {
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
            console.log("Unordered list inserted");
        } else if (event === eventTypes.formatTable) {
            editor.update(() => {
                const tableNode = $createTableNodeWithDimensions(6, 6);
                $insertNodeToNearestRoot(tableNode);
            }); 
        }
    };
    return {
        onClick,
    };
}

export default useOnClickListener;