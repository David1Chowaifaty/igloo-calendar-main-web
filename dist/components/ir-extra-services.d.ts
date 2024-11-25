import type { Components, JSX } from "../types/components";

interface IrExtraServices extends Components.IrExtraServices, HTMLElement {}
export const IrExtraServices: {
    prototype: IrExtraServices;
    new (): IrExtraServices;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
