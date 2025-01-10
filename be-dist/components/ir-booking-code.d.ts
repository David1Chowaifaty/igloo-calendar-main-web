import type { Components, JSX } from "../types/components";

interface IrBookingCode extends Components.IrBookingCode, HTMLElement {}
export const IrBookingCode: {
    prototype: IrBookingCode;
    new (): IrBookingCode;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
