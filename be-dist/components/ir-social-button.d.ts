import type { Components, JSX } from "../types/components";

interface IrSocialButton extends Components.IrSocialButton, HTMLElement {}
export const IrSocialButton: {
    prototype: IrSocialButton;
    new (): IrSocialButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
