import type { Components, JSX } from "../types/components";

interface IrOtaServices extends Components.IrOtaServices, HTMLElement {}
export const IrOtaServices: {
    prototype: IrOtaServices;
    new (): IrOtaServices;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
