import type { Components, JSX } from "../types/components";

interface IrRangePicker extends Components.IrRangePicker, HTMLElement {}
export const IrRangePicker: {
    prototype: IrRangePicker;
    new (): IrRangePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
