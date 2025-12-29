import type { Components, JSX } from "../types/components";

interface IrDateSelect extends Components.IrDateSelect, HTMLElement {}
export const IrDateSelect: {
    prototype: IrDateSelect;
    new (): IrDateSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
