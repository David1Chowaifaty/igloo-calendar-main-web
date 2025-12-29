import type { Components, JSX } from "../types/components";

interface IglToastProvider extends Components.IglToastProvider, HTMLElement {}
export const IglToastProvider: {
    prototype: IglToastProvider;
    new (): IglToastProvider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
