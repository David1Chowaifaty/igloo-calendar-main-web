import type { Components, JSX } from "../types/components";

interface IrBookingGuarantee extends Components.IrBookingGuarantee, HTMLElement {}
export const IrBookingGuarantee: {
    prototype: IrBookingGuarantee;
    new (): IrBookingGuarantee;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
