import type { Components, JSX } from "../types/components";

interface IrRoomtype extends Components.IrRoomtype, HTMLElement {}
export const IrRoomtype: {
    prototype: IrRoomtype;
    new (): IrRoomtype;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
