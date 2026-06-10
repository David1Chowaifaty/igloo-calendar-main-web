import type { Components, JSX } from "../types/components";

interface IrFiscalDocuments extends Components.IrFiscalDocuments, HTMLElement {}
export const IrFiscalDocuments: {
    prototype: IrFiscalDocuments;
    new (): IrFiscalDocuments;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
