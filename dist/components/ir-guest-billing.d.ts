import type { Components, JSX } from "../types/components";

interface IrGuestBilling extends Components.IrGuestBilling, HTMLElement {}
export const IrGuestBilling: {
    prototype: IrGuestBilling;
    new (): IrGuestBilling;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
