import type { Components, JSX } from "../types/components";

interface IrPortal extends Components.IrPortal, HTMLElement {}
export const IrPortal: {
    prototype: IrPortal;
    new (): IrPortal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
