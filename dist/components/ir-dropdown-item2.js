import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irDropdownItemCss = ".sc-ir-dropdown-item-h{display:block;cursor:pointer}[hidden].sc-ir-dropdown-item-h{display:none !important}.active.sc-ir-dropdown-item-h,.focused.sc-ir-dropdown-item-h,[aria-selected='true'].sc-ir-dropdown-item-h,.sc-ir-dropdown-item-h:active{outline:none;background-color:var(--blue, #1e9ff2) !important;color:white !important}.dropdown-item.sc-ir-dropdown-item-h{padding:0.5rem 1rem !important;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
const IrDropdownItemStyle0 = irDropdownItemCss;

const IrDropdownItem = /*@__PURE__*/ proxyCustomElement(class IrDropdownItem extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.dropdownItemSelect = createEvent(this, "dropdownItemSelect", 7);
        this.dropdownItemRegister = createEvent(this, "dropdownItemRegister", 7);
        this.dropdownItemUnregister = createEvent(this, "dropdownItemUnregister", 7);
        /**
         * When true, visually hide the item (used for filtering).
         */
        this.hidden = false;
        this.handleClick = () => {
            this.dropdownItemSelect.emit(this.value);
        };
    }
    componentDidLoad() {
        this.dropdownItemRegister.emit();
    }
    disconnectedCallback() {
        this.dropdownItemUnregister.emit();
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
        return (h(Host, { key: '8d2177f48f88c595f81060e7046ca05e6b04adb3', role: "option", tabindex: "-1", "aria-selected": "false", class: { 'dropdown-item': true }, onClick: this.handleClick }, this.html_content ? h("span", { innerHTML: this.html_content }) : h("slot", null)));
    }
    get el() { return this; }
    static get style() { return IrDropdownItemStyle0; }
}, [6, "ir-dropdown-item", {
        "value": [1],
        "label": [1],
        "html_content": [1],
        "hidden": [1540],
        "matchesQuery": [64],
        "setHidden": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-dropdown-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-dropdown-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrDropdownItem);
            }
            break;
    } });
}

export { IrDropdownItem as I, defineCustomElement as d };

//# sourceMappingURL=ir-dropdown-item2.js.map