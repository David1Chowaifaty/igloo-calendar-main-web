import type { Components, JSX } from "../types/components";

interface IrCityLedger extends Components.IrCityLedger, HTMLElement {}
export const IrCityLedger: {
    prototype: IrCityLedger;
    new (): IrCityLedger;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
