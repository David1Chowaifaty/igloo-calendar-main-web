import type { Components, JSX } from "../types/components";

interface IrPicker extends Components.IrPicker, HTMLElement {}
export const IrPicker: {
    prototype: IrPicker;
    new (): IrPicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
