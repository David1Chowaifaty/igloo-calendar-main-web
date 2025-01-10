import type { Components, JSX } from "../types/components";

interface IrQuickAuth extends Components.IrQuickAuth, HTMLElement {}
export const IrQuickAuth: {
    prototype: IrQuickAuth;
    new (): IrQuickAuth;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
