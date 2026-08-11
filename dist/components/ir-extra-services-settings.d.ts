import type { Components, JSX } from "../types/components";

interface IrExtraServicesSettings extends Components.IrExtraServicesSettings, HTMLElement {}
export const IrExtraServicesSettings: {
    prototype: IrExtraServicesSettings;
    new (): IrExtraServicesSettings;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
