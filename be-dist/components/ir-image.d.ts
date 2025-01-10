import type { Components, JSX } from "../types/components";

interface IrImage extends Components.IrImage, HTMLElement {}
export const IrImage: {
    prototype: IrImage;
    new (): IrImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
