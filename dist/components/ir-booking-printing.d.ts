import type { Components, JSX } from "../types/components";

interface IrBookingPrinting extends Components.IrBookingPrinting, HTMLElement {}
export const IrBookingPrinting: {
    prototype: IrBookingPrinting;
    new (): IrBookingPrinting;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
