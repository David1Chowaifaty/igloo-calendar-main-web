import type { Components, JSX } from "../types/components";

interface IrSheet extends Components.IrSheet, HTMLElement {}
export const IrSheet: {
    prototype: IrSheet;
    new (): IrSheet;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
