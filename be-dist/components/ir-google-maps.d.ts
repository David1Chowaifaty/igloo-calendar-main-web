import type { Components, JSX } from "../types/components";

interface IrGoogleMaps extends Components.IrGoogleMaps, HTMLElement {}
export const IrGoogleMaps: {
    prototype: IrGoogleMaps;
    new (): IrGoogleMaps;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
