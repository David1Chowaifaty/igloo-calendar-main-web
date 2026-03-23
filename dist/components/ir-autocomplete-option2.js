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
        return (h(Host, { key: 'ff450249066387df5acfd1d245299dde10afce27', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: '700f9258d4100a130567924c78928e8140374559', value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: '598fce615bb84dead10da88ce555a13195062b88' }), h("slot", { key: '73cbf3fbf131a537a8fd8d6efc821d35234df09a', name: "start", slot: "start" }), h("slot", { key: '581a9586f77f0d1407eda68d735cbab91ce59041', name: "end", slot: "end" }))));
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