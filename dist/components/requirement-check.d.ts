import type { Components, JSX } from "../types/components";

interface RequirementCheck extends Components.RequirementCheck, HTMLElement {}
export const RequirementCheck: {
    prototype: RequirementCheck;
    new (): RequirementCheck;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
