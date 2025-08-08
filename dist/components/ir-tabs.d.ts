import type { Components, JSX } from "../types/components";

interface IrTabs extends Components.IrTabs, HTMLElement {}
export const IrTabs: {
    prototype: IrTabs;
    new (): IrTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
