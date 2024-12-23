import type { Components, JSX } from "../types/components";

interface IrPmsLogs extends Components.IrPmsLogs, HTMLElement {}
export const IrPmsLogs: {
    prototype: IrPmsLogs;
    new (): IrPmsLogs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
