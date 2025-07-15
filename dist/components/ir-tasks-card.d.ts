import type { Components, JSX } from "../types/components";

interface IrTasksCard extends Components.IrTasksCard, HTMLElement {}
export const IrTasksCard: {
    prototype: IrTasksCard;
    new (): IrTasksCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
