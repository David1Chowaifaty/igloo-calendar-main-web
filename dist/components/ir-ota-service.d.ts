import type { Components, JSX } from "../types/components";

interface IrOtaService extends Components.IrOtaService, HTMLElement {}
export const IrOtaService: {
    prototype: IrOtaService;
    new (): IrOtaService;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
