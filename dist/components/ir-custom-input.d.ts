import type { Components, JSX } from "../types/components";

interface IrCustomInput extends Components.IrCustomInput, HTMLElement {}
export const IrCustomInput: {
    prototype: IrCustomInput;
    new (): IrCustomInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
