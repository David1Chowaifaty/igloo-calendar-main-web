import type { Components, JSX } from "../types/components";

interface IrBe extends Components.IrBe, HTMLElement {}
export const IrBe: {
    prototype: IrBe;
    new (): IrBe;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
