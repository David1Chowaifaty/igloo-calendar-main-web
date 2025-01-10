import type { Components, JSX } from "../types/components";

interface IrGuestCounter extends Components.IrGuestCounter, HTMLElement {}
export const IrGuestCounter: {
    prototype: IrGuestCounter;
    new (): IrGuestCounter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
