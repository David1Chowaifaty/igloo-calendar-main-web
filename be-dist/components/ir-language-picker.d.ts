import type { Components, JSX } from "../types/components";

interface IrLanguagePicker extends Components.IrLanguagePicker, HTMLElement {}
export const IrLanguagePicker: {
    prototype: IrLanguagePicker;
    new (): IrLanguagePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
