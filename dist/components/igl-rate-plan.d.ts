import type { Components, JSX } from "../types/components";

interface IglRatePlan extends Components.IglRatePlan, HTMLElement {}
export const IglRatePlan: {
    prototype: IglRatePlan;
    new (): IglRatePlan;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
