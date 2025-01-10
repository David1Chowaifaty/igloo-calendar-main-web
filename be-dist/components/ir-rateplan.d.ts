import type { Components, JSX } from "../types/components";

interface IrRateplan extends Components.IrRateplan, HTMLElement {}
export const IrRateplan: {
    prototype: IrRateplan;
    new (): IrRateplan;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
