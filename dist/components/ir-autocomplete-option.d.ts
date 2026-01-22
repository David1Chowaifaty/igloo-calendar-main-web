import type { Components, JSX } from "../types/components";

interface IrAutocompleteOption extends Components.IrAutocompleteOption, HTMLElement {}
export const IrAutocompleteOption: {
    prototype: IrAutocompleteOption;
    new (): IrAutocompleteOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
