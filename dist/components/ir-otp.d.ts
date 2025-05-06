import type { Components, JSX } from "../types/components";

interface IrOtp extends Components.IrOtp, HTMLElement {}
export const IrOtp: {
    prototype: IrOtp;
    new (): IrOtp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
