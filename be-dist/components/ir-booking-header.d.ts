import type { Components, JSX } from "../types/components";

interface IrBookingHeader extends Components.IrBookingHeader, HTMLElement {}
export const IrBookingHeader: {
    prototype: IrBookingHeader;
    new (): IrBookingHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
