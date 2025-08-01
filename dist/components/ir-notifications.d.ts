import type { Components, JSX } from "../types/components";

interface IrNotifications extends Components.IrNotifications, HTMLElement {}
export const IrNotifications: {
    prototype: IrNotifications;
    new (): IrNotifications;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
