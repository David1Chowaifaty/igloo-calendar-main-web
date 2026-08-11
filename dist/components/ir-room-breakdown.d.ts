import type { Components, JSX } from "../types/components";

interface IrRoomBreakdown extends Components.IrRoomBreakdown, HTMLElement {}
export const IrRoomBreakdown: {
    prototype: IrRoomBreakdown;
    new (): IrRoomBreakdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
