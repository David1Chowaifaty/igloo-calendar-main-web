import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const irRadioCss = ".sc-ir-radio-h{display:block}.checkmark.sc-ir-radio{top:50% !important;transform:translateY(-50%) !important}";
const IrRadioStyle0 = irRadioCss;

const IrRadio = /*@__PURE__*/ proxyCustomElement(class IrRadio extends HTMLElement {
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
        this.radioBoxId = v4();
        /**
         * Internal state tracking whether the checkbox is currently checked.
         */
        this.currentChecked = false;
    }
    componentWillLoad() {
        this.currentChecked = this.checked;
    }
    componentDidLoad() {
        if (this.radioRef) {
            this.radioRef.setAttribute('aria-checked', JSON.stringify(this.checked));
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
        if (this.radioRef) {
            this.radioRef.setAttribute('aria-checked', JSON.stringify(this.currentChecked));
        }
        this.checkChange.emit(this.currentChecked);
    }
    render() {
        return (h("div", { key: 'a83a153c29cf4af30d9105a4e78d4f7e4eaab4c5', class: "input-group" }, h("label", { key: '4a13e510cf038f124dccd67411eb7948d78cf102', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: '2b7be279cc587689693edadc8f7b51dc75609a64' }, this.label), h("input", { key: '16a3c3975ad31c62758f4a91739a5123db4e7cfd', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '300470e1ece61e4eba56c5918e6912cc2d1346f5', class: "checkmark" }))));
    }
    get el() { return this; }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
    static get style() { return IrRadioStyle0; }
}, [2, "ir-radio", {
        "checked": [4],
        "label": [1],
        "radioBoxId": [1, "radio-box-id"],
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
    const components = ["ir-radio"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRadio);
            }
            break;
    } });
}

export { IrRadio as I, defineCustomElement as d };

//# sourceMappingURL=ir-radio2.js.map