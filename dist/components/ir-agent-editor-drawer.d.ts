import type { Components, JSX } from "../types/components";

interface IrAgentEditorDrawer extends Components.IrAgentEditorDrawer, HTMLElement {}
export const IrAgentEditorDrawer: {
    prototype: IrAgentEditorDrawer;
    new (): IrAgentEditorDrawer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
