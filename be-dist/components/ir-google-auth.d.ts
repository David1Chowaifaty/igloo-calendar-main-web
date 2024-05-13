import type { Components, JSX } from "../types/components";

interface IrGoogleAuth extends Components.IrGoogleAuth, HTMLElement {}
export const IrGoogleAuth: {
    prototype: IrGoogleAuth;
    new (): IrGoogleAuth;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
