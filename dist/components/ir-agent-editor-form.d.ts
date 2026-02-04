import type { Components, JSX } from "../types/components";

interface IrAgentEditorForm extends Components.IrAgentEditorForm, HTMLElement {}
export const IrAgentEditorForm: {
    prototype: IrAgentEditorForm;
    new (): IrAgentEditorForm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
