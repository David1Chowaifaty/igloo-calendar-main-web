import type { Components, JSX } from "../types/components";

interface IrUninvoicedBookings extends Components.IrUninvoicedBookings, HTMLElement {}
export const IrUninvoicedBookings: {
    prototype: IrUninvoicedBookings;
    new (): IrUninvoicedBookings;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
