import type { Components, JSX } from "../types/components";

interface IrClDocumentHeader extends Components.IrClDocumentHeader, HTMLElement {}
export const IrClDocumentHeader: {
    prototype: IrClDocumentHeader;
    new (): IrClDocumentHeader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
