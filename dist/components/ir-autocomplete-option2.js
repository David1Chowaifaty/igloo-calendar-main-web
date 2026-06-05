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
        return (h(Host, { key: '2d90a89f37448944034c46bb00e459fa8aaca624', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: 'f08d1880fa75c4f3a7e435e49b18189ba6ca730b', value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: '4f2329e9ea9ebac13627e9a66771b72e1ae3103e' }), h("slot", { key: '0c896db360506841a504fb204d4e24219266ec05', name: "start", slot: "start" }), h("slot", { key: '0eb62386ecb5cdcee9d63437c3002506cd338c7b', name: "end", slot: "end" }))));
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