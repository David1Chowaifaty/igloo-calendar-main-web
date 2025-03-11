import type { Components, JSX } from "../types/components";

interface IrTestCmp extends Components.IrTestCmp, HTMLElement {}
export const IrTestCmp: {
    prototype: IrTestCmp;
    new (): IrTestCmp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
