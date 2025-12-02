import type { Components, JSX } from "../types/components";

interface IrValidator extends Components.IrValidator, HTMLElement {}
export const IrValidator: {
    prototype: IrValidator;
    new (): IrValidator;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
