import type { Components, JSX } from "../types/components";

interface IrGuestDocumentPreview extends Components.IrGuestDocumentPreview, HTMLElement {}
export const IrGuestDocumentPreview: {
    prototype: IrGuestDocumentPreview;
    new (): IrGuestDocumentPreview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
