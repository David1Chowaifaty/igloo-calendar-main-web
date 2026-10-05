import { r as registerInstance, c as createEvent, a as getElement, h } from './index-CeHdrJeH.js';
import { v as v4 } from './v4-CK3_k8jD.js';

const irRadioCss = () => `.sc-ir-radio-h{display:block}.checkmark.sc-ir-radio{top:50% !important;transform:translateY(-50%) !important}`;

const IrRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkChange = createEvent(this, "checkChange");
    }
    get el() { return getElement(this); }
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
        return (h("div", { key: 'd861b7184ad2c0369e18f26b6e70df006efefb30', class: "input-group" }, h("label", { key: '4e8960f5e6a7a136194ff7dceff7bb0ee705a895', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: '847c9fa7e2b73b560a5e3d259352cf81431d4836' }, this.label), h("input", { key: '4f7f9a03568b899078f2798a4f0fa23dedff8596', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '94f8cdfd9f449ff26fd48e1e8d81027eb4686fac', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": [{
                "handleCheckedChange": 0
            }]
    }; }
};
IrRadio.style = irRadioCss();

export { IrRadio as ir_radio };
