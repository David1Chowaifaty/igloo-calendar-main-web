import type { Components, JSX } from "../types/components";

interface IrPdfViewer extends Components.IrPdfViewer, HTMLElement {}
export const IrPdfViewer: {
    prototype: IrPdfViewer;
    new (): IrPdfViewer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
