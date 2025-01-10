import type { Components, JSX } from "../types/components";

interface IrInput extends Components.IrInput, HTMLElement {}
export const IrInput: {
    prototype: IrInput;
    new (): IrInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
