import type { Components, JSX } from "../types/components";

interface IrOptionDetails extends Components.IrOptionDetails, HTMLElement {}
export const IrOptionDetails: {
    prototype: IrOptionDetails;
    new (): IrOptionDetails;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
