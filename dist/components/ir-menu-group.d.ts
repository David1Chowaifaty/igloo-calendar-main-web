import type { Components, JSX } from "../types/components";

interface IrMenuGroup extends Components.IrMenuGroup, HTMLElement {}
export const IrMenuGroup: {
    prototype: IrMenuGroup;
    new (): IrMenuGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
