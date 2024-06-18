import type { Components, JSX } from "../types/components";

interface IrBookingCard extends Components.IrBookingCard, HTMLElement {}
export const IrBookingCard: {
    prototype: IrBookingCard;
    new (): IrBookingCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
