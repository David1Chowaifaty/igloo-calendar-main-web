import type { Components, JSX } from "../types/components";

interface IrSeoInjector extends Components.IrSeoInjector, HTMLElement {}
export const IrSeoInjector: {
    prototype: IrSeoInjector;
    new (): IrSeoInjector;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
