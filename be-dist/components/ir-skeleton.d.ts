import type { Components, JSX } from "../types/components";

interface IrSkeleton extends Components.IrSkeleton, HTMLElement {}
export const IrSkeleton: {
    prototype: IrSkeleton;
    new (): IrSkeleton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
