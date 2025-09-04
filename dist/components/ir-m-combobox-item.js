import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irMComboboxItemCss = ".sc-ir-m-combobox-item-h{display:block;cursor:pointer}[hidden].sc-ir-m-combobox-item-h{display:none !important}.active.sc-ir-m-combobox-item-h,.focused.sc-ir-m-combobox-item-h,.sc-ir-m-combobox-item-h:active{outline:none;background-color:var(--blue, #1e9ff2) !important;color:white !important}.dropdown-item.sc-ir-m-combobox-item-h{padding:0.5rem 1rem !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const IrMComboboxItemStyle0 = irMComboboxItemCss;

const IrMComboboxItem$1 = /*@__PURE__*/ proxyCustomElement(class IrMComboboxItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '359c81a2e4347f37713981b7e74b6bfe9f116de6', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true }, onClick: this.handleClick }, this.html_content ? h("span", { innerHTML: this.html_content }) : h("slot", null)));
    }
    get el() { return this; }
    static get style() { return IrMComboboxItemStyle0; }
}, [6, "ir-m-combobox-item", {
        "value": [1],
        "label": [1],
        "html_content": [1],
        "hidden": [1540],
        "matchesQuery": [64],
        "setHidden": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-m-combobox-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-m-combobox-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMComboboxItem$1);
            }
            break;
    } });
}

const IrMComboboxItem = IrMComboboxItem$1;
const defineCustomElement = defineCustomElement$1;

export { IrMComboboxItem, defineCustomElement };

//# sourceMappingURL=ir-m-combobox-item.js.map