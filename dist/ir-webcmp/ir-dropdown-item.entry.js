import { r as registerInstance, a as createEvent, i as getElement, h, e as Host } from './index-7b3961ed.js';

const irDropdownItemCss = ".sc-ir-dropdown-item-h{display:block;cursor:pointer}[hidden].sc-ir-dropdown-item-h{display:none !important}.focused.sc-ir-dropdown-item-h{background:#f4f5fa !important}.active.sc-ir-dropdown-item-h,[aria-selected='true'].sc-ir-dropdown-item-h,.sc-ir-dropdown-item-h:active{outline:none;background-color:var(--blue, #1e9ff2) !important;color:white !important}.dropdown-item.sc-ir-dropdown-item-h{padding:0.25rem 1rem !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";

const IrDropdownItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dropdownItemSelect = createEvent(this, "dropdownItemSelect", 7);
        this.dropdownItemRegister = createEvent(this, "dropdownItemRegister", 7);
        this.dropdownItemUnregister = createEvent(this, "dropdownItemUnregister", 7);
    }
    get el() { return getElement(this); }
    isComponentConnected = true;
    hasRegistered = false;
    /**
     * Required value for the option
     */
    value;
    /**
     * Optional label (falls back to textContent)
     */
    label;
    /**
     * Optional html_content (when you want rich content);
     * If omitted, the component will render its own slot content.
     */
    html_content;
    /**
     * When true, visually hide the item (used for filtering).
     */
    hidden = false;
    /**
     * Emit when this item is chosen. Parent listens and closes dropdown.
     */
    dropdownItemSelect;
    /**
     * Inform the parent this item exists (parent will index and manage focus)
     */
    dropdownItemRegister;
    /**
     * Inform the parent this item is gone
     */
    dropdownItemUnregister;
    componentDidLoad() {
        if (this.isComponentConnected && !this.hasRegistered) {
            this.hasRegistered = true;
            // Use RAF to ensure parent is ready
            requestAnimationFrame(() => {
                if (this.isComponentConnected) {
                    this.dropdownItemRegister.emit();
                }
            });
        }
    }
    disconnectedCallback() {
        this.isComponentConnected = false;
        // Only emit unregister if we previously registered and parent might still be connected
        if (this.hasRegistered && this.el.parentElement) {
            // Check if parent dropdown still exists in DOM
            const parentDropdown = this.el.closest('ir-dropdown');
            if (parentDropdown && document.contains(parentDropdown)) {
                this.dropdownItemUnregister.emit();
            }
        }
        this.hasRegistered = false;
    }
    async matchesQuery(query) {
        if (!this.isComponentConnected)
            return false;
        const q = query.toLowerCase();
        const hay = (this.label ?? this.el.textContent ?? '').toLowerCase();
        return hay.includes(q);
    }
    async setHidden(next) {
        if (this.isComponentConnected) {
            this.hidden = next;
        }
    }
    handleClick = (event) => {
        event.stopPropagation();
        if (!this.isComponentConnected)
            return;
        this.dropdownItemSelect.emit(this.value);
    };
    render() {
        return (h(Host, { key: '1d9466fcc6704c56c94e2164fb7fef1baf113186', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true, 'hidden': this.hidden }, onClick: this.handleClick, "data-value": this.value }, this.html_content ? h("span", { innerHTML: this.html_content }) : h("slot", null)));
    }
};
IrDropdownItem.style = irDropdownItemCss;

export { IrDropdownItem as ir_dropdown_item };

//# sourceMappingURL=ir-dropdown-item.entry.js.map