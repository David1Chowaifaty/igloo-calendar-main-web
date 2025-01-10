import type { Components, JSX } from "../types/components";

interface IrPriceInput extends Components.IrPriceInput, HTMLElement {}
export const IrPriceInput: {
    prototype: IrPriceInput;
    new (): IrPriceInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
