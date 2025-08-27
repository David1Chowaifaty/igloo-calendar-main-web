import type { Components, JSX } from "../types/components";

interface IrDropdownItem extends Components.IrDropdownItem, HTMLElement {}
export const IrDropdownItem: {
    prototype: IrDropdownItem;
    new (): IrDropdownItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
