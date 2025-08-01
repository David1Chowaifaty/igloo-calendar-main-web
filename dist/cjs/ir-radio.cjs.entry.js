'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const v4 = require('./v4-9b297151.js');

const irRadioCss = ".sc-ir-radio-h{display:block}";
const IrRadioStyle0 = irRadioCss;

const IrRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.checkChange = index.createEvent(this, "checkChange", 7);
        /**
         * Whether the checkbox is checked.
         */
        this.checked = false;
        /**
         * The unique ID of the checkbox element.
         */
        this.radioBoxId = v4.v4();
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
        return (index.h("div", { key: '2b48ae181ba606d75967d72ee3937e3865299e66', class: "input-group" }, index.h("label", { key: '4a4e8dfc8b075a84e4cbd5c4e9e92c31c11ee34f', class: "check-container radio-container" }, index.h("span", { key: 'ea866dc0eb6ebf9cf63b852c458fd8add464a37f' }, this.label), index.h("input", { key: '1b3aebc3e7ecee7a8bef06ff30e24e2b588cf610', type: "radio", value: "000", title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), index.h("span", { key: '65ec3e274cc335b06e96d44ef92c0bb71a50d60a', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrRadio.style = IrRadioStyle0;

exports.ir_radio = IrRadio;

//# sourceMappingURL=ir-radio.cjs.entry.js.map