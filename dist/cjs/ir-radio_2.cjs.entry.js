'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const v4 = require('./v4-9b297151.js');

const irRadioCss = ".sc-ir-radio-h{display:block}.checkmark.sc-ir-radio{top:50% !important;transform:translateY(-50%) !important}";
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
        return (index.h("div", { key: '5223be68fb4a37a1b9df9c317aee6f06eebb7d50', class: "input-group" }, index.h("label", { key: '46a0ffa74eaa8e2685889e493fa37128d73a986d', class: "check-container radio-container align-items-center m-0 py-0" }, index.h("span", { key: 'd7bcf9e2a9f970fad391f8418252d8164703e35d' }, this.label), index.h("input", { key: '95dccd8d2495ae35263dde37cddec18c5e9e488d', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), index.h("span", { key: '679c6dc22cd4859806751892fa7becda69fd81c5', class: "checkmark" }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrRadio.style = IrRadioStyle0;

const irWeekdaySelectorCss = ".sc-ir-weekday-selector-h{display:block}.days-checkbox.sc-ir-weekday-selector{gap:0.5rem}";
const IrWeekdaySelectorStyle0 = irWeekdaySelectorCss;

const IrWeekdaySelector = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.weekdayChange = index.createEvent(this, "weekdayChange", 7);
        /**
         * Initial list of selected weekdays (numeric values).
         */
        this.weekdays = [];
        /**
         * Internal state tracking currently selected weekdays.
         */
        this.selectedWeekdays = new Set(this.weekdays);
        this._weekdays = [
            { value: 1, label: 'M' },
            { value: 2, label: 'T' },
            { value: 3, label: 'W' },
            { value: 4, label: 'Th' },
            { value: 5, label: 'Fr' },
            { value: 6, label: 'Sa' },
            { value: 0, label: 'Su' },
        ];
    }
    handleWeekdayChange(newDays, oldDays) {
        if (newDays.length !== oldDays.length && newDays.length !== this.selectedWeekdays.size) {
            this.selectedWeekdays = new Set(newDays);
        }
    }
    /**
     * Toggles the selected state of a specific weekday.
     * Updates internal state and emits `weekdayChange` event.
     *
     * @param checked - Whether the checkbox is checked.
     * @param weekDay - The numeric value of the weekday.
     */
    toggleWeekDays({ checked, weekDay }) {
        const prev = new Set(this.selectedWeekdays);
        if (checked) {
            if (!this.selectedWeekdays.has(weekDay)) {
                prev.add(weekDay);
                this.selectedWeekdays = new Set(prev);
            }
        }
        else {
            prev.delete(weekDay);
            this.selectedWeekdays = new Set(prev);
        }
        this.weekdayChange.emit(Array.from(this.selectedWeekdays));
    }
    render() {
        return (index.h(index.Host, { key: 'bb97bb631f11db16fefb3c9c07b6ffecda3237f5', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (index.h("ir-checkbox", { checked: this.selectedWeekdays.has(w.value), onCheckChange: e => this.toggleWeekDays({ checked: e.detail, weekDay: w.value }), label: w.label, labelClass: "m-0 p-0", class: "days-checkbox" })))));
    }
    static get watchers() { return {
        "weekdays": ["handleWeekdayChange"]
    }; }
};
IrWeekdaySelector.style = IrWeekdaySelectorStyle0;

exports.ir_radio = IrRadio;
exports.ir_weekday_selector = IrWeekdaySelector;

//# sourceMappingURL=ir-radio_2.cjs.entry.js.map