import type { Components, JSX } from "../types/components";

interface IrApplicablePolicies extends Components.IrApplicablePolicies, HTMLElement {}
export const IrApplicablePolicies: {
    prototype: IrApplicablePolicies;
    new (): IrApplicablePolicies;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
