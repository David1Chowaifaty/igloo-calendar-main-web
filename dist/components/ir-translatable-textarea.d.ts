import type { Components, JSX } from "../types/components";

interface IrTranslatableTextarea extends Components.IrTranslatableTextarea, HTMLElement {}
export const IrTranslatableTextarea: {
    prototype: IrTranslatableTextarea;
    new (): IrTranslatableTextarea;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
