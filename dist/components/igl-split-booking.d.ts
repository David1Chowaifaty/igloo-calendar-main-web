import type { Components, JSX } from "../types/components";

interface IglSplitBooking extends Components.IglSplitBooking, HTMLElement {}
export const IglSplitBooking: {
    prototype: IglSplitBooking;
    new (): IglSplitBooking;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
