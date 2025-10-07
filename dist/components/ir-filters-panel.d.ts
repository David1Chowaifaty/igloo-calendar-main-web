import type { Components, JSX } from "../types/components";

interface IrFiltersPanel extends Components.IrFiltersPanel, HTMLElement {}
export const IrFiltersPanel: {
    prototype: IrFiltersPanel;
    new (): IrFiltersPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
