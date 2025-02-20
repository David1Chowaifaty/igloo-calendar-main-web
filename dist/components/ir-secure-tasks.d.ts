import type { Components, JSX } from "../types/components";

interface IrSecureTasks extends Components.IrSecureTasks, HTMLElement {}
export const IrSecureTasks: {
    prototype: IrSecureTasks;
    new (): IrSecureTasks;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
