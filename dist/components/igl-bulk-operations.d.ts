import type { Components, JSX } from "../types/components";

interface IglBulkOperations extends Components.IglBulkOperations, HTMLElement {}
export const IglBulkOperations: {
    prototype: IglBulkOperations;
    new (): IglBulkOperations;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
