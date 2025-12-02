import type { Components, JSX } from "../types/components";

interface IrCustomButton extends Components.IrCustomButton, HTMLElement {}
export const IrCustomButton: {
    prototype: IrCustomButton;
    new (): IrCustomButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
