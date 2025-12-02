import type { Components, JSX } from "../types/components";

interface IrUnitTag extends Components.IrUnitTag, HTMLElement {}
export const IrUnitTag: {
    prototype: IrUnitTag;
    new (): IrUnitTag;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
