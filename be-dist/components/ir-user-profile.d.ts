import type { Components, JSX } from "../types/components";

interface IrUserProfile extends Components.IrUserProfile, HTMLElement {}
export const IrUserProfile: {
    prototype: IrUserProfile;
    new (): IrUserProfile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
