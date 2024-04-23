import type { Components, JSX } from "../types/components";

interface IrCheckoutPage extends Components.IrCheckoutPage, HTMLElement {}
export const IrCheckoutPage: {
    prototype: IrCheckoutPage;
    new (): IrCheckoutPage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
