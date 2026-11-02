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
        return (h("div", { key: 'c972c54a943d2d3e5c973c8e8b23291c199dd108', class: "input-group" }, h("label", { key: '2283a5134c3cd312cb9f1b9a2703b5004db8755e', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: '8594822a5343ec31f19bc808d82757a100e04c8d' }, this.label), h("input", { key: '6a9c4df27aa474b2599fbc72ad264da4dc260381', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: '3c54ceaa6e97e1a6a202862580d0d2abb955238b', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": [{
                "handleCheckedChange": 0
            }]
    }; }
};
IrRadio.style = irRadioCss();

export { IrRadio as ir_radio };
