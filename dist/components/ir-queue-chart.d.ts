import type { Components, JSX } from "../types/components";

interface IrQueueChart extends Components.IrQueueChart, HTMLElement {}
export const IrQueueChart: {
    prototype: IrQueueChart;
    new (): IrQueueChart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
