import type { Components, JSX } from "../types/components";

interface IrPickerItem extends Components.IrPickerItem, HTMLElement {}
export const IrPickerItem: {
    prototype: IrPickerItem;
    new (): IrPickerItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
