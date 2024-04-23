import type { Components, JSX } from "../types/components";

interface IrBookingSummary extends Components.IrBookingSummary, HTMLElement {}
export const IrBookingSummary: {
    prototype: IrBookingSummary;
    new (): IrBookingSummary;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
