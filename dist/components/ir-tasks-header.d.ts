import type { Components, JSX } from "../types/components";

interface IrTasksHeader extends Components.IrTasksHeader, HTMLElement {}
export const IrTasksHeader: {
    prototype: IrTasksHeader;
    new (): IrTasksHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
