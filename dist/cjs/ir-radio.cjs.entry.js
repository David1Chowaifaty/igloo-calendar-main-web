'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const v4 = require('./v4-9b297151.js');

const irRadioCss = ".sc-ir-radio-h{display:block}.checkmark.sc-ir-radio{top:50% !important;transform:translateY(-50%) !important}";
const IrRadioStyle0 = irRadioCss;

const IrRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkChange = index.createEvent(this, "checkChange", 7);
    }
    get el() { return index.getElement(this); }
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
    radioBoxId = v4.v4();
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
        return (index.h("div", { key: 'b80ca545945221fbb2ef7008c8bdca74b20668b1', class: "input-group" }, index.h("label", { key: '5d1a0ea2d0ccf1d1d9386fdcec8ae7159ab8c88d', class: "check-container radio-container align-items-center m-0 py-0" }, index.h("span", { key: '7319f6a36592edf05e690673434b10623e41ca19' }, this.label), index.h("input", { key: '965a9317dedec48f5b2925ceeb1ec44417bc4825', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), index.h("span", { key: '4bfe915e497b677d89dad870c2fbfb68c8b6eaee', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrRadio.style = IrRadioStyle0;

exports.ir_radio = IrRadio;

//# sourceMappingURL=ir-radio.cjs.entry.js.map