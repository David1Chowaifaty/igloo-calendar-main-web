import type { Components, JSX } from "../types/components";

interface IglBulkBlock extends Components.IglBulkBlock, HTMLElement {}
export const IglBulkBlock: {
    prototype: IglBulkBlock;
    new (): IglBulkBlock;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
