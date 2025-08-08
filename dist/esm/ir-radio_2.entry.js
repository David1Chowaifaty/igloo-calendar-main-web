import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-60982d00.js';
import { v as v4 } from './v4-964634d6.js';

const irRadioCss = ".sc-ir-radio-h{display:block}.checkmark.sc-ir-radio{top:50% !important;transform:translateY(-50%) !important}";
const IrRadioStyle0 = irRadioCss;

const IrRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { key: 'eb1b55419dc0970eef4218517c8c544f03f18760', class: "input-group" }, h("label", { key: '252e20eaa2551c5416377a1b4931618eaa293b64', class: "check-container radio-container align-items-center m-0 py-0" }, h("span", { key: '3a065be71bc1844c52e460a39bf6b1ec073b2a8c' }, this.label), h("input", { key: '91859e70989d20f70f20113b598a9331c09de8f9', class: "p-0 m-0", type: "radio", value: "000", name: this.el.name, title: "", onChange: () => {
                this.handleCheckChange();
            }, checked: this.currentChecked, ref: el => (this.radioRef = el) }), h("span", { key: 'ef89d030c71720c76b3f65b83262734515f024fa', class: "checkmark" }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "checked": ["handleCheckedChange"]
    }; }
};
IrRadio.style = IrRadioStyle0;

const irWeekdaySelectorCss = ".sc-ir-weekday-selector-h{display:block}.days-checkbox.sc-ir-weekday-selector{gap:0.5rem}";
const IrWeekdaySelectorStyle0 = irWeekdaySelectorCss;

const IrWeekdaySelector = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.weekdayChange = createEvent(this, "weekdayChange", 7);
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
        return (h(Host, { key: 'c221f4de3693782249aea50deeb08ec471bab115', class: "my-1 d-flex align-items-center", style: { gap: '1.1rem' } }, this._weekdays.map(w => (h("ir-checkbox", { checked: this.selectedWeekdays.has(w.value), onCheckChange: e => this.toggleWeekDays({ checked: e.detail, weekDay: w.value }), label: w.label, labelClass: "m-0 p-0", class: "days-checkbox" })))));
    }
    static get watchers() { return {
        "weekdays": ["handleWeekdayChange"]
    }; }
};
IrWeekdaySelector.style = IrWeekdaySelectorStyle0;

export { IrRadio as ir_radio, IrWeekdaySelector as ir_weekday_selector };

//# sourceMappingURL=ir-radio_2.entry.js.map