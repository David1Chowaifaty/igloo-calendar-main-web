import type { Components, JSX } from "../types/components";

interface IrHomeLoader extends Components.IrHomeLoader, HTMLElement {}
export const IrHomeLoader: {
    prototype: IrHomeLoader;
    new (): IrHomeLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
