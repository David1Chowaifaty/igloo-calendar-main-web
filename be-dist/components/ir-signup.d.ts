import type { Components, JSX } from "../types/components";

interface IrSignup extends Components.IrSignup, HTMLElement {}
export const IrSignup: {
    prototype: IrSignup;
    new (): IrSignup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
