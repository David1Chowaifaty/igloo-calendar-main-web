import type { Components, JSX } from "../types/components";

interface IrOtpModal extends Components.IrOtpModal, HTMLElement {}
export const IrOtpModal: {
    prototype: IrOtpModal;
    new (): IrOtpModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
