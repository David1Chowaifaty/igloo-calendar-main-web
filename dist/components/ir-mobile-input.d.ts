import type { Components, JSX } from "../types/components";

interface IrMobileInput extends Components.IrMobileInput, HTMLElement {}
export const IrMobileInput: {
    prototype: IrMobileInput;
    new (): IrMobileInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
