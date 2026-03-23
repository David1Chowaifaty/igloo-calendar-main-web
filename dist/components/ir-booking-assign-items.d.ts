import type { Components, JSX } from "../types/components";

interface IrBookingAssignItems extends Components.IrBookingAssignItems, HTMLElement {}
export const IrBookingAssignItems: {
    prototype: IrBookingAssignItems;
    new (): IrBookingAssignItems;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
