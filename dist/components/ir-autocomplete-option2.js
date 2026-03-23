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
        return (h(Host, { key: '3d991a983257278dce268bc4801468ce2dc7fc7b', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: '5bbe2ec55b6b34fef8a74416a10a7e9e6eaff422', value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: '2a79d45756a261003122be5ab4796a1f5abff0bf' }), h("slot", { key: '267a7967a415e2e906b6b7cba64d40aa3a0db0e8', name: "start", slot: "start" }), h("slot", { key: '42fcd5d9bfcd3d59d9baf51e873022feb7786192', name: "end", slot: "end" }))));
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