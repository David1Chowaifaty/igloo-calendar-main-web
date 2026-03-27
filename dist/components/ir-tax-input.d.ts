import type { Components, JSX } from "../types/components";

interface IrTaxInput extends Components.IrTaxInput, HTMLElement {}
export const IrTaxInput: {
    prototype: IrTaxInput;
    new (): IrTaxInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
