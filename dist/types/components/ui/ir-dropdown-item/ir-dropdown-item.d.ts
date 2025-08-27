import { EventEmitter } from '../../../stencil-public-runtime';
import { DropdownItem } from '../ir-dropdown/ir-dropdown';
export declare class IrDropdownItem {
    el: HTMLIrDropdownItemElement;
    private isComponentConnected;
    private hasRegistered;
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
    dropdownItemSelect: EventEmitter<DropdownItem['value']>;
    /**
     * Inform the parent this item exists (parent will index and manage focus)
     */
    dropdownItemRegister: EventEmitter<void>;
    /**
     * Inform the parent this item is gone
     */
    dropdownItemUnregister: EventEmitter<void>;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    matchesQuery(query: string): Promise<boolean>;
    setHidden(next: boolean): Promise<void>;
    private handleClick;
    render(): any;
}
