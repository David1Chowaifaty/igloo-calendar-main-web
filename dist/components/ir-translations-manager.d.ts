import type { Components, JSX } from "../types/components";

interface IrTranslationsManager extends Components.IrTranslationsManager, HTMLElement {}
export const IrTranslationsManager: {
    prototype: IrTranslationsManager;
    new (): IrTranslationsManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
