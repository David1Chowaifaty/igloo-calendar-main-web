import type { Components, JSX } from "../types/components";

interface IrGallery extends Components.IrGallery, HTMLElement {}
export const IrGallery: {
    prototype: IrGallery;
    new (): IrGallery;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
