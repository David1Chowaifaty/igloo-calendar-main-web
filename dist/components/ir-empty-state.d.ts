import type { Components, JSX } from "../types/components";

interface IrEmptyState extends Components.IrEmptyState, HTMLElement {}
export const IrEmptyState: {
    prototype: IrEmptyState;
    new (): IrEmptyState;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
