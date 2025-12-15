import type { Components, JSX } from "../types/components";

interface IrPrintingLabel extends Components.IrPrintingLabel, HTMLElement {}
export const IrPrintingLabel: {
    prototype: IrPrintingLabel;
    new (): IrPrintingLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
