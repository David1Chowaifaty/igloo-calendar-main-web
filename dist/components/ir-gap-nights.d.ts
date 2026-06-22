import type { Components, JSX } from "../types/components";

interface IrGapNights extends Components.IrGapNights, HTMLElement {}
export const IrGapNights: {
    prototype: IrGapNights;
    new (): IrGapNights;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
