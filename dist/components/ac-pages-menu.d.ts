import type { Components, JSX } from "../types/components";

interface AcPagesMenu extends Components.AcPagesMenu, HTMLElement {}
export const AcPagesMenu: {
    prototype: AcPagesMenu;
    new (): AcPagesMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
