import type { Components, JSX } from "../types/components";

interface IrExtraService extends Components.IrExtraService, HTMLElement {}
export const IrExtraService: {
    prototype: IrExtraService;
    new (): IrExtraService;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
