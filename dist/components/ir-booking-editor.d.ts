import type { Components, JSX } from "../types/components";

interface IrBookingEditor extends Components.IrBookingEditor, HTMLElement {}
export const IrBookingEditor: {
    prototype: IrBookingEditor;
    new (): IrBookingEditor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
