import type { Components, JSX } from "../types/components";

interface IrRoomHeader extends Components.IrRoomHeader, HTMLElement {}
export const IrRoomHeader: {
    prototype: IrRoomHeader;
    new (): IrRoomHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
