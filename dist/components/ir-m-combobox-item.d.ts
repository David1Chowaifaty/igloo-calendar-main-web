import type { Components, JSX } from "../types/components";

interface IrMComboboxItem extends Components.IrMComboboxItem, HTMLElement {}
export const IrMComboboxItem: {
    prototype: IrMComboboxItem;
    new (): IrMComboboxItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
