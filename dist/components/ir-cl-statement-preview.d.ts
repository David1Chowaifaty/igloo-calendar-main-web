import type { Components, JSX } from "../types/components";

interface IrClStatementPreview extends Components.IrClStatementPreview, HTMLElement {}
export const IrClStatementPreview: {
    prototype: IrClStatementPreview;
    new (): IrClStatementPreview;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
