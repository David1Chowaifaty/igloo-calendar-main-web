import type { Components, JSX } from "../types/components";

interface IrFacilities extends Components.IrFacilities, HTMLElement {}
export const IrFacilities: {
    prototype: IrFacilities;
    new (): IrFacilities;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
