import type { Components, JSX } from "../types/components";

interface IrFooter extends Components.IrFooter, HTMLElement {}
export const IrFooter: {
    prototype: IrFooter;
    new (): IrFooter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
