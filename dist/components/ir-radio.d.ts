import type { Components, JSX } from "../types/components";

interface IrRadio extends Components.IrRadio, HTMLElement {}
export const IrRadio: {
    prototype: IrRadio;
    new (): IrRadio;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
