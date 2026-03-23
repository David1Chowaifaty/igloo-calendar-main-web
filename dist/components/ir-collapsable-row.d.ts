import type { Components, JSX } from "../types/components";

interface IrCollapsableRow extends Components.IrCollapsableRow, HTMLElement {}
export const IrCollapsableRow: {
    prototype: IrCollapsableRow;
    new (): IrCollapsableRow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
