import type { Components, JSX } from "../types/components";

interface IrDepartures extends Components.IrDepartures, HTMLElement {}
export const IrDepartures: {
    prototype: IrDepartures;
    new (): IrDepartures;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
