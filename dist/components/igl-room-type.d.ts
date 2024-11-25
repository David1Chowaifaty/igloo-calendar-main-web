import type { Components, JSX } from "../types/components";

interface IglRoomType extends Components.IglRoomType, HTMLElement {}
export const IglRoomType: {
    prototype: IglRoomType;
    new (): IglRoomType;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
