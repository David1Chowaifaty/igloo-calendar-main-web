import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const irCheckboxCss = ".sc-ir-checkbox-h{display:flex;align-items:center;width:fit-content}button.sc-ir-checkbox{all:unset}.CheckboxRoot.sc-ir-checkbox{background-color:white;width:20px;height:20px;border-radius:4px;display:flex;align-items:center;justify-content:center;border:1px solid #cacfe7;border-radius:4px;transition:all 0.3s ease}.CheckboxRoot.sc-ir-checkbox:disabled{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3);pointer-events:none}.CheckboxRoot[data-state='checked'].sc-ir-checkbox{background-color:#1e9ff2;color:white;border-color:#1e9ff2}input[type='checkbox'].sc-ir-checkbox{background-color:initial;cursor:default;appearance:auto;box-sizing:border-box;margin:3px 3px 3px 4px;padding:initial;border:initial}.checkbox.sc-ir-checkbox{transform:translateX(-100%);position:absolute;pointer-events:none;opacity:0;margin:0px;width:20px;height:20px}";
const IrCheckboxStyle0 = irCheckboxCss;

const IrCheckbox = /*@__PURE__*/ proxyCustomElement(class IrCheckbox extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.checkChange = createEvent(this, "checkChange", 7);
        /**
         * Whether the checkbox is checked.
         */
        this.checked = false;
        /**
         * The unique ID of the checkbox element.
         */
        this.checkboxId = v4();
        /**
         * Internal state tracking whether the checkbox is currently checked.
         */
        this.currentChecked = false;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.checked));
        }
    }
    /**
     * Watcher for the `checked` property. Syncs internal state with external prop changes.
     */
    handleCheckedChange(newValue) {
        if (newValue === this.currentChecked) {
            return;
        }
        this.currentChecked = this.checked;
    }
    /**
     * Handles user interaction with the checkbox and updates its state.
     */
    handleCheckChange() {
        this.currentChecked = !this.currentChecked;
        if (this.checkboxRef) {
            this.checkboxRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (h(Host, { key: '05e3afa159de66ccdc2bbb276696e57d50196b8e' }, h("button", { key: '966b1aca4c851df046cad03a61f69392f47d4eca', disabled: this.disabled, name: this.name, onClick: this.handleCheckChange.bind(this), id: this.checkboxId, "data-state": this.currentChecked || this.indeterminate ? 'checked' : 'unchecked', value: 'on', ref: ref => (this.checkboxRef = ref), type: "button", role: "checkbox", class: "CheckboxRoot" }, this.currentChecked && (h("svg", { key: '5d814f233be1a66fe04c1b13e2558999b80cc5a8', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: 'a2495d4f2cc8c392b796c54b488131ec7a545d6a', fill: "currentColor", d: "M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" }))), this.indeterminate && (h("svg", { key: '93b0623cfa6e53ab638774674775898a345071bd', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, h("path", { key: '79512f77699fd9ca819dcf366ad779ab5c117673', fill: "currentColor", d: "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" })))), h("input", { key: '0cfddf16a12d4a242efe189b23b76d57067eb158', type: "checkbox", indeterminate: this.indeterminate, "aria-hidden": "true", tabindex: "-1", value: "on", checked: this.currentChecked, class: "checkbox" }), this.label && (h("label", { key: '5063e12526368959f0fc772d56eb9a12a9b07064', htmlFor: this.checkboxId, class: this.labelClass }, this.label))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
    static get style() { return IrCheckboxStyle0; }
}, [2, "ir-checkbox", {
        "checked": [4],
        "label": [1],
        "checkboxId": [1, "checkbox-id"],
        "name": [1],
        "indeterminate": [4],
        "disabled": [4],
        "labelClass": [1, "label-class"],
        "currentChecked": [32]
    }, undefined, {
        "checked": ["handleCheckedChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrCheckbox);
            }
            break;
    } });
}

export { IrCheckbox as I, defineCustomElement as d };

//# sourceMappingURL=ir-checkbox2.js.map