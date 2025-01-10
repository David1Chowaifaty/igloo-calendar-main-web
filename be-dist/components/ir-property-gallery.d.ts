import type { Components, JSX } from "../types/components";

interface IrPropertyGallery extends Components.IrPropertyGallery, HTMLElement {}
export const IrPropertyGallery: {
    prototype: IrPropertyGallery;
    new (): IrPropertyGallery;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
