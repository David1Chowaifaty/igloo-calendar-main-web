import type { Components, JSX } from "../types/components";

interface IrDatePopup extends Components.IrDatePopup, HTMLElement {}
export const IrDatePopup: {
    prototype: IrDatePopup;
    new (): IrDatePopup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
