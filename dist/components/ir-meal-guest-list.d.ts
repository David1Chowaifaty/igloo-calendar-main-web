import type { Components, JSX } from "../types/components";

interface IrMealGuestList extends Components.IrMealGuestList, HTMLElement {}
export const IrMealGuestList: {
    prototype: IrMealGuestList;
    new (): IrMealGuestList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
