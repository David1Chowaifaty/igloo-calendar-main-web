import type { Components, JSX } from "../types/components";

interface IrLoyalty extends Components.IrLoyalty, HTMLElement {}
export const IrLoyalty: {
    prototype: IrLoyalty;
    new (): IrLoyalty;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
