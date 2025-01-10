import type { Components, JSX } from "../types/components";

interface IrAuth extends Components.IrAuth, HTMLElement {}
export const IrAuth: {
    prototype: IrAuth;
    new (): IrAuth;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
