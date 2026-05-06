import type { Components, JSX } from "../types/components";

interface IrAgentBilling extends Components.IrAgentBilling, HTMLElement {}
export const IrAgentBilling: {
    prototype: IrAgentBilling;
    new (): IrAgentBilling;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
