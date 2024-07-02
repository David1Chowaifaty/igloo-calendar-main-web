import type { Components, JSX } from "../types/components";

interface IrBookingDetailsView extends Components.IrBookingDetailsView, HTMLElement {}
export const IrBookingDetailsView: {
    prototype: IrBookingDetailsView;
    new (): IrBookingDetailsView;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
