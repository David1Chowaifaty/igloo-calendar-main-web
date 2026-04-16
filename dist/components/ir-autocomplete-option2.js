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
        return (h(Host, { key: 'edc17972ddd91d84ee31f749ac95f96066a474b2', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: '70c567da088ac0421082c728d1c4ebca7af69b00', value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: '768cc98873fd25e5a7eb693ae6f7ab856de791f9' }), h("slot", { key: '35ff059fb08ab1ad57431166efa6b87c1d63a319', name: "start", slot: "start" }), h("slot", { key: '2c94563c9f2e146c1db87b1aca7339b609a7eb4e', name: "end", slot: "end" }))));
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