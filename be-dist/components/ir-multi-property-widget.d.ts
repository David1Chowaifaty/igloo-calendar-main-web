import type { Components, JSX } from "../types/components";

interface IrMultiPropertyWidget extends Components.IrMultiPropertyWidget, HTMLElement {}
export const IrMultiPropertyWidget: {
    prototype: IrMultiPropertyWidget;
    new (): IrMultiPropertyWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
