import type { Components, JSX } from "../types/components";

interface IrDpReport extends Components.IrDpReport, HTMLElement {}
export const IrDpReport: {
    prototype: IrDpReport;
    new (): IrDpReport;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
