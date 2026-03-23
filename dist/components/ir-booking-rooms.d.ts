import type { Components, JSX } from "../types/components";

interface IrBookingRooms extends Components.IrBookingRooms, HTMLElement {}
export const IrBookingRooms: {
    prototype: IrBookingRooms;
    new (): IrBookingRooms;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
