import type { Components, JSX } from "../types/components";

interface IrWidget extends Components.IrWidget, HTMLElement {}
export const IrWidget: {
    prototype: IrWidget;
    new (): IrWidget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
