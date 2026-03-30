import type { Components, JSX } from "../types/components";

interface IglLegend extends Components.IglLegend, HTMLElement {}
export const IglLegend: {
    prototype: IglLegend;
    new (): IglLegend;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
