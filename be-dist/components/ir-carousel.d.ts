import type { Components, JSX } from "../types/components";

interface IrCarousel extends Components.IrCarousel, HTMLElement {}
export const IrCarousel: {
    prototype: IrCarousel;
    new (): IrCarousel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
