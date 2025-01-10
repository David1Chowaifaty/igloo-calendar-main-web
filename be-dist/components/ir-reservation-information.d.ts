import type { Components, JSX } from "../types/components";

interface IrReservationInformation extends Components.IrReservationInformation, HTMLElement {}
export const IrReservationInformation: {
    prototype: IrReservationInformation;
    new (): IrReservationInformation;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
