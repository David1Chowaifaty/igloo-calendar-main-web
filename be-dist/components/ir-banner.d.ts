import type { Components, JSX } from "../types/components";

interface IrBanner extends Components.IrBanner, HTMLElement {}
export const IrBanner: {
    prototype: IrBanner;
    new (): IrBanner;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
