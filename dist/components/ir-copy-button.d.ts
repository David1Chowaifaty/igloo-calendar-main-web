import type { Components, JSX } from "../types/components";

interface IrCopyButton extends Components.IrCopyButton, HTMLElement {}
export const IrCopyButton: {
    prototype: IrCopyButton;
    new (): IrCopyButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
