import type { Components, JSX } from "../types/components";

interface IrToastProvider extends Components.IrToastProvider, HTMLElement {}
export const IrToastProvider: {
    prototype: IrToastProvider;
    new (): IrToastProvider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
