import type { Components, JSX } from "../types/components";

interface IrPmsSearch extends Components.IrPmsSearch, HTMLElement {}
export const IrPmsSearch: {
    prototype: IrPmsSearch;
    new (): IrPmsSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
