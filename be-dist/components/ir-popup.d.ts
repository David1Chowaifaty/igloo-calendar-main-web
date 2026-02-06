import type { Components, JSX } from "../types/components";

interface IrPopup extends Components.IrPopup, HTMLElement {}
export const IrPopup: {
    prototype: IrPopup;
    new (): IrPopup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
