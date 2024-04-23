import type { Components, JSX } from "../types/components";

interface IrCalendar extends Components.IrCalendar, HTMLElement {}
export const IrCalendar: {
    prototype: IrCalendar;
    new (): IrCalendar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
