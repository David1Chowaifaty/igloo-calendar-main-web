import type { Components, JSX } from "../types/components";

interface IrUserAvatar extends Components.IrUserAvatar, HTMLElement {}
export const IrUserAvatar: {
    prototype: IrUserAvatar;
    new (): IrUserAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
