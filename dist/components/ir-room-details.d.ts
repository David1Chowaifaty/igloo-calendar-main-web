import type { Components, JSX } from "../types/components";

interface IrRoomDetails extends Components.IrRoomDetails, HTMLElement {}
export const IrRoomDetails: {
    prototype: IrRoomDetails;
    new (): IrRoomDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
