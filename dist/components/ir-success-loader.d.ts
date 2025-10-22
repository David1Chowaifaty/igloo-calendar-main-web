import type { Components, JSX } from "../types/components";

interface IrSuccessLoader extends Components.IrSuccessLoader, HTMLElement {}
export const IrSuccessLoader: {
    prototype: IrSuccessLoader;
    new (): IrSuccessLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
