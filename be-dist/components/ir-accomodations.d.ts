import type { Components, JSX } from "../types/components";

interface IrAccomodations extends Components.IrAccomodations, HTMLElement {}
export const IrAccomodations: {
    prototype: IrAccomodations;
    new (): IrAccomodations;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
