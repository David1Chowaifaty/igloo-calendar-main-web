import type { Components, JSX } from "../types/components";

interface IrAccordion extends Components.IrAccordion, HTMLElement {}
export const IrAccordion: {
    prototype: IrAccordion;
    new (): IrAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
