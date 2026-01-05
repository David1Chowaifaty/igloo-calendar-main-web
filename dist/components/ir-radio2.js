import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const irRadioCss = ".sc-ir-radio-h{display:block}.checkmark.sc-ir-radio{top:50% !important;transform:translateY(-50%) !important}";
const IrRadioStyle0 = irRadioCss;

const IrRadio = /*@__PURE__*/ proxyCustomElement(class IrRadio extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.checkChange = createEvent(this, "checkChange", 7);
    }
    get el() { return this; }
    /**
     * Whether the checkbox is checked.
     */
    checked = false;
    /**
     * The label text associated with the checkbox.
     */
    label;
    /**
     * The unique ID of the checkbox element.
     */
    radioBoxId = v4();
    /**
     * The name attribute of the checkbox, used for form submission.
     */
    name;
    /**
     * Whether the checkbox is in an indeterminate state.
     */
    indeterminate;
    /**
     * Disables the checkbox when true.
     */
    disabled;
    /**
     * CSS class applied to the label element.
     */
    labelClass;
    /**
     * Internal state tracking whether the checkbox is currently checked.
     */
    currentChecked = false;
    /**
     * Emitted when the checkbox's checked state changes.
     */
    checkChange;
    radioRef;
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
        return (h("div", { key: 'a1624354f731a0e5cfc60402dfb995a803649cb8', class: "input-group" }, h("label", { key: '0d59785893d5fc54f64cca4665077e12d5ac0126', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: '466dcdbe745f2887f4da698543fd9b6bf55642d3' }, this.label), h("input", { key: 'c00a1db4855b82357c981f11dbcec3ca96d36f43', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '2330ec15c42ec422423c27960f7dce5b4244b0ac', class: "checkmark" }))));
    }
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