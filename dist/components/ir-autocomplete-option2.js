import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irAutocompleteOptionCss = ":host{display:block}";
const IrAutocompleteOptionStyle0 = irAutocompleteOptionCss;

const IrAutocompleteOption = /*@__PURE__*/ proxyCustomElement(class IrAutocompleteOption extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    value;
    label;
    disabled = false;
    current = false;
    selected = false;
    render() {
        return (h(Host, { key: '3fe399d1e56be1b5cc6cbdeae327c70182ba5c0c', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: 'fcc59bc5926a227373b17638b418b772cd5e1113', value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: '5677ef6b0055fa3c91f1007b5e5d25888fda58bc' }), h("slot", { key: 'a34c815f35ee0870a8d1c70ca55b650a880e961d', name: "start", slot: "start" }), h("slot", { key: 'eadf3d94ae811e6fa7eb0268832ac5ff9ac0a172', name: "end", slot: "end" }))));
    }
    static get style() { return IrAutocompleteOptionStyle0; }
}, [1, "ir-autocomplete-option", {
        "value": [513],
        "label": [513],
        "disabled": [516],
        "current": [1540],
        "selected": [1540]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-autocomplete-option"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-autocomplete-option":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrAutocompleteOption);
            }
            break;
    } });
}

export { IrAutocompleteOption as I, defineCustomElement as d };

//# sourceMappingURL=ir-autocomplete-option2.js.map