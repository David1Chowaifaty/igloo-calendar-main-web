import type { Components, JSX } from "../types/components";

interface IrSignin extends Components.IrSignin, HTMLElement {}
export const IrSignin: {
    prototype: IrSignin;
    new (): IrSignin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
