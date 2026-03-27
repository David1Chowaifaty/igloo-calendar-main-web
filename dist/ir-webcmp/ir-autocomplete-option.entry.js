import { r as registerInstance, h, e as Host } from './index-7b3961ed.js';

const irAutocompleteOptionCss = ":host{display:block}";

const IrAutocompleteOption = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    value;
    label;
    disabled = false;
    current = false;
    selected = false;
    render() {
        return (h(Host, { key: '3937cbb6d0dc9d3addde248cd6e2dc31760fcc21', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("wa-option", { key: 'f1eed6c132d490b53a9f7682942e45c3f4f04c66', value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, h("slot", { key: '92e5db1382eb7460b12efebe1ebf5889d2f7460b' }), h("slot", { key: '4b67017c3bf2c2a9e26dc00482bd4b0aad6cb256', name: "start", slot: "start" }), h("slot", { key: 'd609a52d7accd95ae2958b4c2cf1e5a17a1296f6', name: "end", slot: "end" }))));
    }
};
IrAutocompleteOption.style = irAutocompleteOptionCss;

export { IrAutocompleteOption as ir_autocomplete_option };

//# sourceMappingURL=ir-autocomplete-option.entry.js.map