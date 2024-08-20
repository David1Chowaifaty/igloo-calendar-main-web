import type { Components, JSX } from "../types/components";

interface IrLogin extends Components.IrLogin, HTMLElement {}
export const IrLogin: {
    prototype: IrLogin;
    new (): IrLogin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
