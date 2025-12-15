import type { Components, JSX } from "../types/components";

interface IrPrintingPickup extends Components.IrPrintingPickup, HTMLElement {}
export const IrPrintingPickup: {
    prototype: IrPrintingPickup;
    new (): IrPrintingPickup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
