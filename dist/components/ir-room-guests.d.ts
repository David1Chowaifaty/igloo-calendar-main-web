import type { Components, JSX } from "../types/components";

interface IrRoomGuests extends Components.IrRoomGuests, HTMLElement {}
export const IrRoomGuests: {
    prototype: IrRoomGuests;
    new (): IrRoomGuests;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
