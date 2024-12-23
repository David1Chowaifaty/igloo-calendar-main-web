import type { Components, JSX } from "../types/components";

interface IrEventsLog extends Components.IrEventsLog, HTMLElement {}
export const IrEventsLog: {
    prototype: IrEventsLog;
    new (): IrEventsLog;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
