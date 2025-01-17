import type { Components, JSX } from "../types/components";

interface IrCountryPicker extends Components.IrCountryPicker, HTMLElement {}
export const IrCountryPicker: {
    prototype: IrCountryPicker;
    new (): IrCountryPicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
