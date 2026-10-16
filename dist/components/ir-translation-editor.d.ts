import type { Components, JSX } from "../types/components";

interface IrTranslationEditor extends Components.IrTranslationEditor, HTMLElement {}
export const IrTranslationEditor: {
    prototype: IrTranslationEditor;
    new (): IrTranslationEditor;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
