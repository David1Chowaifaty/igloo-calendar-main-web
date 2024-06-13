import type { Components, JSX } from "../types/components";

interface IrBookingWidget extends Components.IrBookingWidget, HTMLElement {}
export const IrBookingWidget: {
    prototype: IrBookingWidget;
    new (): IrBookingWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
