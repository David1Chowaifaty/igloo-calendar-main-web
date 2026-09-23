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
        return (h("div", { key: '972138f6c325f71f31f67e691e3230a45fbd6f97', class: "input-group" }, h("label", { key: '0bdbaa980f0ca030c2b4dbe530feb617d89eac94', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: '0b8341f5436c8184fdde70357e2ce2cc7e0bf20f' }, this.label), h("input", { key: 'fbd4ca339fb35b1085a3cc6cb6e81a6c2b97a138', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '642adf05301bff3adebe81dcaa22e826f82a10ff', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": [{
                "handleCheckedChange": 0
            }]
    }; }
};
IrRadio.style = irRadioCss();

export { IrRadio as ir_radio };
