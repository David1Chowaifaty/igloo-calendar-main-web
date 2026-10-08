import type { Components, JSX } from "../types/components";

interface IrCloneRates extends Components.IrCloneRates, HTMLElement {}
export const IrCloneRates: {
    prototype: IrCloneRates;
    new (): IrCloneRates;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
