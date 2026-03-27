import type { Components, JSX } from "../types/components";

interface IrPage extends Components.IrPage, HTMLElement {}
export const IrPage: {
    prototype: IrPage;
    new (): IrPage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
