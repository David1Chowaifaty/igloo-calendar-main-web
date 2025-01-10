import type { Components, JSX } from "../types/components";

interface IrTextEditor extends Components.IrTextEditor, HTMLElement {}
export const IrTextEditor: {
    prototype: IrTextEditor;
    new (): IrTextEditor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
