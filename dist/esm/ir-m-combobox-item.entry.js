import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-7e96440e.js';

const irMComboboxItemCss = ".sc-ir-m-combobox-item-h{display:block;cursor:pointer}[hidden].sc-ir-m-combobox-item-h{display:none !important}.active.sc-ir-m-combobox-item-h,.focused.sc-ir-m-combobox-item-h,.sc-ir-m-combobox-item-h:active{outline:none;background-color:var(--blue, #1e9ff2) !important;color:white !important}.dropdown-item.sc-ir-m-combobox-item-h{padding:0.5rem 1rem !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const IrMComboboxItemStyle0 = irMComboboxItemCss;

const IrMComboboxItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxItemSelect = createEvent(this, "comboboxItemSelect", 7);
        this.comboboxItemRegister = createEvent(this, "comboboxItemRegister", 7);
        this.comboboxItemUnregister = createEvent(this, "comboboxItemUnregister", 7);
    }
    get el() { return getElement(this); }
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
    comboboxItemSelect;
    /**
     * Inform the parent this item exists (parent will index and manage focus)
     */
    comboboxItemRegister;
    /**
     * Inform the parent this item is gone
     */
    comboboxItemUnregister;
    componentDidLoad() {
        this.comboboxItemRegister.emit();
    }
    disconnectedCallback() {
        this.comboboxItemUnregister.emit();
    }
    toOption() {
        const label = (this.label ?? this.el.textContent ?? '').trim();
        return {
            value: this.value,
            label,
            html_content: this.html_content,
        };
    }
    async matchesQuery(query) {
        const q = query.toLowerCase();
        const hay = (this.label ?? this.el.textContent ?? '').toLowerCase();
        return hay.includes(q);
    }
    async setHidden(next) {
        this.hidden = next;
    }
    handleClick = () => {
        this.comboboxItemSelect.emit(this.toOption());
    };
    render() {
        // Render either provided html_content or the slotted content
        return (h(Host, { key: '5b97b52ee9aed2bec3227470e0e6f8b99cdf9040', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true }, onClick: this.handleClick }, this.html_content ? h("span", { innerHTML: this.html_content }) : h("slot", null)));
    }
};
IrMComboboxItem.style = IrMComboboxItemStyle0;

export { IrMComboboxItem as ir_m_combobox_item };

//# sourceMappingURL=ir-m-combobox-item.entry.js.map