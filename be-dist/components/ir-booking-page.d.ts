import type { Components, JSX } from "../types/components";

interface IrBookingPage extends Components.IrBookingPage, HTMLElement {}
export const IrBookingPage: {
    prototype: IrBookingPage;
    new (): IrBookingPage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
