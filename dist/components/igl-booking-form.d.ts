import type { Components, JSX } from "../types/components";

interface IglBookingForm extends Components.IglBookingForm, HTMLElement {}
export const IglBookingForm: {
    prototype: IglBookingForm;
    new (): IglBookingForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
