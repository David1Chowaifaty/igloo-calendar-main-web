import type { Components, JSX } from "../types/components";

interface IrTestcmp extends Components.IrTestcmp, HTMLElement {}
export const IrTestcmp: {
    prototype: IrTestcmp;
    new (): IrTestcmp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
