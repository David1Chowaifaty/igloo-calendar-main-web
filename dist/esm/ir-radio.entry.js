import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DKZeCK8T.js';
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
        return (h("div", { key: '5edfe3bce85c7946e135b400a1c84252b39652f3', class: "input-group" }, h("label", { key: '64338943e5bf72ce6247314297f5b63f3f7a966f', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: 'dacda6e8d7a5fc9cf9b09eda0221ae1c3fe87b16' }, this.label), h("input", { key: 'cd41fa429d0c19458616fdb5baed52241d3a0806', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '804ff60225ad319ef50103c39a8813c6023c4c96', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": [{
                "handleCheckedChange": 0
            }]
    }; }
};
IrRadio.style = irRadioCss();

export { IrRadio as ir_radio };
