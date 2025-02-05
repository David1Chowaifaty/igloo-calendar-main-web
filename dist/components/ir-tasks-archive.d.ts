import type { Components, JSX } from "../types/components";

interface IrTasksArchive extends Components.IrTasksArchive, HTMLElement {}
export const IrTasksArchive: {
    prototype: IrTasksArchive;
    new (): IrTasksArchive;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
