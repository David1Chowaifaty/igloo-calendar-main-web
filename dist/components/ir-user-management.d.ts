import type { Components, JSX } from "../types/components";

interface IrUserManagement extends Components.IrUserManagement, HTMLElement {}
export const IrUserManagement: {
    prototype: IrUserManagement;
    new (): IrUserManagement;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
