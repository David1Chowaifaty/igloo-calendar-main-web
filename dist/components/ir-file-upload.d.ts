import type { Components, JSX } from "../types/components";

interface IrFileUpload extends Components.IrFileUpload, HTMLElement {}
export const IrFileUpload: {
    prototype: IrFileUpload;
    new (): IrFileUpload;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
