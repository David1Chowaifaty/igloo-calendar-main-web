import type { Components, JSX } from "../types/components";

interface IrProgressIndicator extends Components.IrProgressIndicator, HTMLElement {}
export const IrProgressIndicator: {
    prototype: IrProgressIndicator;
    new (): IrProgressIndicator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
