import type { Components, JSX } from "../types/components";

interface IrCustomDatePicker extends Components.IrCustomDatePicker, HTMLElement {}
export const IrCustomDatePicker: {
    prototype: IrCustomDatePicker;
    new (): IrCustomDatePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
