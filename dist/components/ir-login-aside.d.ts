import type { Components, JSX } from "../types/components";

interface IrLoginAside extends Components.IrLoginAside, HTMLElement {}
export const IrLoginAside: {
    prototype: IrLoginAside;
    new (): IrLoginAside;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
