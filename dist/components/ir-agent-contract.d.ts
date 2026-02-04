import type { Components, JSX } from "../types/components";

interface IrAgentContract extends Components.IrAgentContract, HTMLElement {}
export const IrAgentContract: {
    prototype: IrAgentContract;
    new (): IrAgentContract;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
