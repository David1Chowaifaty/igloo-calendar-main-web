import type { Components, JSX } from "../types/components";

interface IrQueueManager extends Components.IrQueueManager, HTMLElement {}
export const IrQueueManager: {
    prototype: IrQueueManager;
    new (): IrQueueManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
