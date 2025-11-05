import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-60982d00.js';

const irMComboboxItemCss = ".sc-ir-m-combobox-item-h{display:block;cursor:pointer}[hidden].sc-ir-m-combobox-item-h{display:none !important}.active.sc-ir-m-combobox-item-h,.focused.sc-ir-m-combobox-item-h,.sc-ir-m-combobox-item-h:active{outline:none;background-color:var(--blue, #1e9ff2) !important;color:white !important}.dropdown-item.sc-ir-m-combobox-item-h{padding:0.5rem 1rem !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const IrMComboboxItemStyle0 = irMComboboxItemCss;

const IrMComboboxItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxItemSelect = createEvent(this, "comboboxItemSelect", 7);
        this.comboboxItemRegister = createEvent(this, "comboboxItemRegister", 7);
        this.comboboxItemUnregister = createEvent(this, "comboboxItemUnregister", 7);
        /**
         * When true, visually hide the item (used for filtering).
         */
        this.hidden = false;
        this.handleClick = () => {
            this.comboboxItemSelect.emit(this.toOption());
        };
    }
    componentDidLoad() {
        this.comboboxItemRegister.emit();
    }
    disconnectedCallback() {
        this.comboboxItemUnregister.emit();
    }
    toOption() {
        var _a, _b;
        const label = ((_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.el.textContent) !== null && _b !== void 0 ? _b : '').trim();
        return {
            value: this.value,
            label,
            html_content: this.html_content,
        };
    }
    async matchesQuery(query) {
        var _a, _b;
        const q = query.toLowerCase();
        const hay = ((_b = (_a = this.label) !== null && _a !== void 0 ? _a : this.el.textContent) !== null && _b !== void 0 ? _b : '').toLowerCase();
        return hay.includes(q);
    }
    async setHidden(next) {
        this.hidden = next;
    }
    render() {
        // Render either provided html_content or the slotted content
        return (h(Host, { key: '2a1dd239814cfe77f77adf3237e678f9c147be13', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true }, onClick: this.handleClick }, this.html_content ? h("span", { innerHTML: this.html_content }) : h("slot", null)));
    }
    get el() { return getElement(this); }
};
IrMComboboxItem.style = IrMComboboxItemStyle0;

export { IrMComboboxItem as ir_m_combobox_item };

//# sourceMappingURL=ir-m-combobox-item.entry.js.map