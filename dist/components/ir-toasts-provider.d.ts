import type { Components, JSX } from "../types/components";

interface IrToastsProvider extends Components.IrToastsProvider, HTMLElement {}
export const IrToastsProvider: {
    prototype: IrToastsProvider;
    new (): IrToastsProvider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
