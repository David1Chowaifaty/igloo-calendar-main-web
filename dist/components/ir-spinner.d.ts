import type { Components, JSX } from "../types/components";

interface IrSpinner extends Components.IrSpinner, HTMLElement {}
export const IrSpinner: {
    prototype: IrSpinner;
    new (): IrSpinner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
