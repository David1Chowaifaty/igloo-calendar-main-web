import type { Components, JSX } from "../types/components";

interface IrAgents extends Components.IrAgents, HTMLElement {}
export const IrAgents: {
    prototype: IrAgents;
    new (): IrAgents;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
