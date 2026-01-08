import type { Components, JSX } from "../types/components";

interface IrPmsPage extends Components.IrPmsPage, HTMLElement {}
export const IrPmsPage: {
    prototype: IrPmsPage;
    new (): IrPmsPage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
