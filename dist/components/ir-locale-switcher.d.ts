import type { Components, JSX } from "../types/components";

interface IrLocaleSwitcher extends Components.IrLocaleSwitcher, HTMLElement {}
export const IrLocaleSwitcher: {
    prototype: IrLocaleSwitcher;
    new (): IrLocaleSwitcher;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
