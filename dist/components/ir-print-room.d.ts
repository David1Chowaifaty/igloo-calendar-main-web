import type { Components, JSX } from "../types/components";

interface IrPrintRoom extends Components.IrPrintRoom, HTMLElement {}
export const IrPrintRoom: {
    prototype: IrPrintRoom;
    new (): IrPrintRoom;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
