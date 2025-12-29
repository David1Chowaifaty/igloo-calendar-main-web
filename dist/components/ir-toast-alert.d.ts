import type { Components, JSX } from "../types/components";

interface IrToastAlert extends Components.IrToastAlert, HTMLElement {}
export const IrToastAlert: {
    prototype: IrToastAlert;
    new (): IrToastAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
