import type { Components, JSX } from "../types/components";

interface IrCreditCardInput extends Components.IrCreditCardInput, HTMLElement {}
export const IrCreditCardInput: {
    prototype: IrCreditCardInput;
    new (): IrCreditCardInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
