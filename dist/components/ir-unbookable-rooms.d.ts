import type { Components, JSX } from "../types/components";

interface IrUnbookableRooms extends Components.IrUnbookableRooms, HTMLElement {}
export const IrUnbookableRooms: {
    prototype: IrUnbookableRooms;
    new (): IrUnbookableRooms;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
