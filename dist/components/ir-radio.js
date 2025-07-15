import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { v as v4 } from './v4.js';

const irRadioCss = ".sc-ir-radio-h{display:block}";
const IrRadioStyle0 = irRadioCss;

const IrRadio$1 = /*@__PURE__*/ proxyCustomElement(class IrRadio extends HTMLElement {
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
        return (h("div", { key: 'b72b3ecf1a41f8d8d94d3f4befbe9f588e308dc2', class: "input-group" }, h("label", { key: 'd930760c0ec72f128852506e5088bb1a0fbe3b6e', class: "check-container radio-container" }, h("span", { key: 'd36c5401ba42bfd41238deca0d42733fe3f87ed4' }, this.label), h("input", { key: '5ed1d60db10ecc48bf40e44c56cf61c0d346e45e', type: "radio", value: "000", title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '644168dd29f9db085d63ed5a24f052a66e31bda2', class: "checkmark" }))));
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
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-radio"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrRadio$1);
            }
            break;
    } });
}

const IrRadio = IrRadio$1;
const defineCustomElement = defineCustomElement$1;

export { IrRadio, defineCustomElement };

//# sourceMappingURL=ir-radio.js.map