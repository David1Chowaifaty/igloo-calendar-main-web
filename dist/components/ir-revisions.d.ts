import type { Components, JSX } from "../types/components";

interface IrRevisions extends Components.IrRevisions, HTMLElement {}
export const IrRevisions: {
    prototype: IrRevisions;
    new (): IrRevisions;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
