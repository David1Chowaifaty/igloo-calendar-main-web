import type { Components, JSX } from "../types/components";

interface IrUserFormPanel extends Components.IrUserFormPanel, HTMLElement {}
export const IrUserFormPanel: {
    prototype: IrUserFormPanel;
    new (): IrUserFormPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
