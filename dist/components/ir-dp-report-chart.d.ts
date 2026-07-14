import type { Components, JSX } from "../types/components";

interface IrDpReportChart extends Components.IrDpReportChart, HTMLElement {}
export const IrDpReportChart: {
    prototype: IrDpReportChart;
    new (): IrDpReportChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
