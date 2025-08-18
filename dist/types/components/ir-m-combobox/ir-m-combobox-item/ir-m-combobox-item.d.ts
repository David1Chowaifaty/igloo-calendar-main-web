import { EventEmitter } from '../../../stencil-public-runtime';
import { ComboboxOption } from '../types';
export declare class IrMComboboxItem {
    el: HTMLElement;
    /**
     * Required value for the option
     */
    value: string;
    /**
     * Optional label (falls back to textContent)
     */
    label?: string;
    /**
     * Optional html_content (when you want rich content);
     * If omitted, the component will render its own slot content.
     */
    html_content?: string;
    /**
     * When true, visually hide the item (used for filtering).
     */
    hidden: boolean;
    /**
     * Emit when this item is chosen. Parent listens and closes dropdown.
     */
    comboboxItemSelect: EventEmitter<ComboboxOption>;
    /**
     * Inform the parent this item exists (parent will index and manage focus)
     */
    comboboxItemRegister: EventEmitter<void>;
    /**
     * Inform the parent this item is gone
     */
    comboboxItemUnregister: EventEmitter<void>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private toOption;
    matchesQuery(query: string): Promise<boolean>;
    setHidden(next: boolean): Promise<void>;
    private handleClick;
    render(): any;
}
