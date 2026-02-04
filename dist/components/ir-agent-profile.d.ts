import type { Components, JSX } from "../types/components";

interface IrAgentProfile extends Components.IrAgentProfile, HTMLElement {}
export const IrAgentProfile: {
    prototype: IrAgentProfile;
    new (): IrAgentProfile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
