import type { Components, JSX } from "../types/components";

interface IrBookingOverview extends Components.IrBookingOverview, HTMLElement {}
export const IrBookingOverview: {
    prototype: IrBookingOverview;
    new (): IrBookingOverview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
