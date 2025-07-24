'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
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
        return (index.h("div", { key: '934fe67c732080cd37f907701c263c0e547c0929', class: "input-group" }, index.h("label", { key: 'acfeee6c2aca794f6f31ff38f94ded57ec258d48', class: "check-container radio-container" }, index.h("span", { key: '5a904c1369a6b959474356b427b6b8e40603084d' }, this.label), index.h("input", { key: 'ea6e4b4a30eb6cb9091860a7c9e9db69bd26fdd9', type: "radio", value: "000", title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), index.h("span", { key: '22f50c0ce8d08250dfa62d0bd3243c06c0f5e9ac', class: "checkmark" }))));
    }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrRadio.style = IrRadioStyle0;

exports.ir_radio = IrRadio;

//# sourceMappingURL=ir-radio.cjs.entry.js.map