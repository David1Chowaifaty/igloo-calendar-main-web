import { r as registerInstance, c as createEvent, g as getElement, h } from './index-b3dce66a.js';
import { v as v4 } from './v4-964634d6.js';

const irRadioCss = ".sc-ir-radio-h{display:block}.checkmark.sc-ir-radio{top:50% !important;transform:translateY(-50%) !important}";
const IrRadioStyle0 = irRadioCss;

const IrRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.checkChange = createEvent(this, "checkChange", 7);
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
        return (h("div", { key: 'eb6ec8767669dec3c810053325e63d508af99522', class: "input-group" }, h("label", { key: '6a34bd573721b2ec243b40509f3131e5a63a8d09', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: '61ad597a1712da92bec1214c6ce675baf1097d23' }, this.label), h("input", { key: 'dbc6cac805c08feaecf4db7436b59c3533dc1e1b', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '85035ee23ee46436b176feb56111032c8cd4ff30', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrRadio.style = IrRadioStyle0;

export { IrRadio as ir_radio };

//# sourceMappingURL=ir-radio.entry.js.map