import type { Components, JSX } from "../types/components";

interface IrRoomExtraServices extends Components.IrRoomExtraServices, HTMLElement {}
export const IrRoomExtraServices: {
    prototype: IrRoomExtraServices;
    new (): IrRoomExtraServices;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
