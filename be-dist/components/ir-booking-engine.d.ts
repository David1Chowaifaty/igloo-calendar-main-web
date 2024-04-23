import type { Components, JSX } from "../types/components";

interface IrBookingEngine extends Components.IrBookingEngine, HTMLElement {}
export const IrBookingEngine: {
    prototype: IrBookingEngine;
    new (): IrBookingEngine;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
